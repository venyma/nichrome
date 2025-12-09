const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('electronAPI', {
newTab: (url) => ipcRenderer.send('new-tab', url),
navigate: (input) => ipcRenderer.send('navigate', input),
switchTab: (index) => ipcRenderer.send('switch-tab', index),
closeTab: (index) => ipcRenderer.send('close-tab', index),
getTabs: () => ipcRenderer.invoke('get-tabs'),


onTabsUpdated: (cb) => ipcRenderer.on('tabs-updated', (e, data) => cb(data)),
onTabActivated: (cb) => ipcRenderer.on('tab-activated', (e, data) => cb(data)),
onTabUrlUpdated: (cb) => ipcRenderer.on('tab-url-updated', (e, data) => cb(data))
});
