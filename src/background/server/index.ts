import { ipcRenderer, remote } from 'electron'
import Handlers from './handlers'
import * as ipc from './ipc'

let isDev, version

if (process.argv[2] === '--subprocess') {
  isDev = false
  version = process.argv[3]

  const socketName = process.argv[4]
  ipc.init(socketName, Handlers)
} else {
  isDev = true
  version = remote.app.getVersion()

  ipcRenderer.on('set-socket', (event, { name }) => {
    ipc.init(name, Handlers)
  })
}

console.log(version, isDev)
