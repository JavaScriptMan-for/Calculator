const {app,BrowserWindow} = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new  BrowserWindow({
        minWidth: 380,
        minHeight: 530,
        maxWidth: 380,
        maxHeight: 530,
        width: 380,
        height: 530,
        icon:  path.join(__dirname, "favicon.ico")
    })
    win.setMenuBarVisibility(false);
    win.setTitle("Калькулятор")
    win.loadFile('./index.html')
}
app.whenReady().then(()=>createWindow());
app.on('window-all-closed', ()=> app.quit());

