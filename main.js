const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
const path = require('path');


function createWindow() {
const win = new BrowserWindow({
width: 1200,
height: 800,
icon: path.join(__dirname, 'assets/icon.png'),
webPreferences: {
preload: path.join(__dirname, 'preload.js')
}
});


win.loadFile('./renderer/index.html');
}


app.whenReady().then(createWindow);


app.on('window-all-closed', () => {
if (process.platform !== 'darwin') app.quit();
});


app.on('activate', () => {
if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
