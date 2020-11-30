import Nedb from 'nedb-promises-ts';
import { remote } from 'electron';
const userData = remote.app.getAppPath();

console.log(userData)

export interface SettingsDocument {
    name: string;
    value: string;
}

export interface DB {
    settings: Nedb<SettingsDocument>;
}

const settings = new Nedb<SettingsDocument>({ filename: userData + '/db/settings.db', autoload: true })

export default {
    settings
}