import { app, BrowserWindow } from 'electron';
import { fork, ChildProcess } from 'child_process'
import findOpenSocket from './renderer/client/find-open-socket'
import isDev from 'electron-is-dev'
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const BACKGROUND_WINDOW_WEBPACK_ENTRY: string;
declare const BACKGROUND_WEBPACK_ENTRY: string;
let serverProcess: ChildProcess;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

function createWindow(socketName: string): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('set-socket', {
      name: socketName
    })
  })

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

function createBackgroundWindow(socketName: string) {
  const win = new BrowserWindow({
    x: 500,
    y: 300,
    width: 700,
    height: 500,
    show: true,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true
    }
  })
  win.loadURL(BACKGROUND_WINDOW_WEBPACK_ENTRY)
  win.webContents.openDevTools();
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('set-socket', { name: socketName })
  })
}

function createBackgroundProcess(socketName: string) {
  serverProcess = fork(BACKGROUND_WEBPACK_ENTRY, [
    '--subprocess',
    app.getVersion(),
    socketName
  ])

  serverProcess.on('message', msg => {
    console.log(msg)
  })
}

async function start() {
  const serverSocket = await findOpenSocket()

  createWindow(serverSocket)

  if (isDev) {
    createBackgroundWindow(serverSocket)
  } else {
    createBackgroundProcess(serverSocket)
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', start);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  if (serverProcess) {
    serverProcess.kill()
    serverProcess = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    start();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
