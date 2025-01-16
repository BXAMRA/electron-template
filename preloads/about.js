const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api_about', {
  getTheme: () => ipcRenderer.invoke('get-theme'),
  closeWindow: () => ipcRenderer.invoke('window-close'),
});