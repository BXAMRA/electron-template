const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api_z', {
  getTheme: () => ipcRenderer.invoke('get-theme'),
  aboutOpen: () => ipcRenderer.invoke('open-about-window'),
  minimizeWindow: () => ipcRenderer.invoke('window-minimize'),
  closeWindow: () => ipcRenderer.invoke('window-close'),
});