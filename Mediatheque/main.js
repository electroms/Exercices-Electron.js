//Importer les modules
const { app, BrowserWindow, ipcMain, dialog } = require('electron')

function createWindow() {
    //Créer la fenetre du navigateur avec ses dimensions
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    //Charger le fichier index.html à afficher dans la fenetre
    win.loadFile('index.html')
}
//Lance l'ouverture de la fenètre au lancement de npm start
app.whenReady().then(createWindow)