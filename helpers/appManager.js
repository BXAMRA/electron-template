import Store from 'electron-store';

const Storage = new Store();

export class dbConfig {
    
    set = (user, pass, ip, port, db) => {
        Storage.set('db.user', user);
        Storage.set('db.pass', pass);
        Storage.set('db.ip', ip);
        Storage.set('db.port', port);
        Storage.set('db.db', db);
    }

    get = () => {
        return Storage.get('db');
    }
}

export class session {

    values = () => {
        return Storage.get('session');
    }

    set = (username, name, accessLevel, theme) => {
        Storage.set('session.user.username', username);
        Storage.set('session.user.name', name);
        Storage.set('session.user.level', accessLevel);
        Storage.set('session.user.theme', theme);
        Storage.set('session.active', true);
    }

    isActive = () => {
        return Storage.get('session.active');
    }

    clear = () => {
        Storage.delete('session.user.username');
        Storage.delete('session.user.name');
        Storage.delete('session.user.level');
        Storage.set('session.user.theme', 'default');
        Storage.set('session.active', false);
    }

    user = new class {

        username = () => {
            return Storage.get('session.user.username');
        }

        name = () => {
            return Storage.get('session.user.name');
        }

        level = () => {
            return Storage.get('session.user.level');
        }

        theme = () => {
            return Storage.get('session.user.theme');
        }

    }
}

export class setting {

    all = () => {
        return Storage.get('setting');
    }

    save = (name, value) => {
        Storage.set('setting.' + name, value);
    }

    load = (name) => {
        return Storage.get('setting.' + name);
    }

    defaults = () => {
        return Storage.get('default');
    }

    defaultTheme = () => {
        return Storage.get('default.theme')
    }

    setDefault = new class {

        theme = (theme) => {
            Storage.set('default.theme', theme);
        }

    }
}