import { app, BrowserWindow, ipcMain, Menu, shell } from 'electron';
import path from 'node:path';
import { connectDB } from './helpers/dbManager.js';
import { dbConfig, session, setting } from './helpers/appManager.js';

const isMac = process.platform === 'darwin';
const isDev = !app.isPackaged;

// Set true to open dev tools on window creation
const showDevTools = false;

const Session = new session();
const Settings = new setting();
const DBConfig = new dbConfig();

// Create app window
const createMain = () => {
  const main = new BrowserWindow({
    width: 700,
    height: 600,
    resizable: false,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(app.getAppPath(), '/preloads/main.js')
    }
  });

  main.loadFile(path.join(app.getAppPath(), '/views/main.html'));

  if (isDev && showDevTools) {
    main.webContents.openDevTools({
      mode: 'undocked'
    });
  }
};

// Create about window
const createAbout = () => {
  const view = new BrowserWindow({
    width: 300,
    height: 250,
    resizable: false,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(app.getAppPath(), '/preloads/about.js')
    }
  });

  view.loadFile(path.join(app.getAppPath(), '/views/about.html'));

  if (isDev && showDevTools) {
    view.webContents.openDevTools({
      mode: 'undocked'
    });
  }
};

// Main function after application startup
const startup = () => {
  // Load settings, database config and user preferences and create required window

  createMain();
};

const toggleTheme = () => {
  if (Settings.defaultTheme() == 'light') {
    Settings.setDefault.theme('dark');
  } else {
    Settings.setDefault.theme('light');
  }

  BrowserWindow.getFocusedWindow().reload();
};

const menu = [
  ...(isMac ? [{
    label: app.name,
    submenu: [
      ...(isDev ? [
        {
          role: 'reload'
        },
        {
          role: 'toggleDevTools',
          accelerator: 'Cmd+D'
        },
        {
          label: 'Toggle Theme',
          click: () => toggleTheme(),
          accelerator: 'Cmd+T'
        },
        {
          label: 'Close Window',
          click: () => BrowserWindow.getFocusedWindow().close(),
          accelerator: 'Cmd+W'
        },
        {
          type: 'separator'
        }] : []),
      {
        label: 'Quit',
        click: () => app.quit(),
        accelerator: 'Cmd+Q'
      }
    ],
  }] : []),
];

// APP EVENTS

app.whenReady().then(() => {
  startup();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      startup();
    }
  });
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});

app.on('before-quit', () => {
  Session.clear();
});

// IPC EVENTS

ipcMain.handle('get-theme', () => {
  if (Settings.defaultTheme() == undefined) {
    Settings.setDefault.theme('light');
    return Settings.defaultTheme();
  } else if (Session.user.theme() === 'default') {
    return Settings.defaultTheme();
  } else {
    return Session.user.theme();
  }
})

ipcMain.handle('open-about-window', (event) => {
  createAbout();
})

ipcMain.handle('window-minimize', (event) => {
  BrowserWindow.getFocusedWindow().minimize();
})

ipcMain.handle('window-close', () => {
  BrowserWindow.getFocusedWindow().close();
})