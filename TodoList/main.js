//Importer les modules
const { app, BrowserWindow, ipcMain, dialog } = require('electron')


//Déclaration d'une fonction createWindow
function createWindow() {
    //Créer la fenetre du navigateur
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })



    //Charger le fichier index.html à afficher dans la fenetre
    win.loadFile('index.html')
    win.webContents.openDevTools()

    //Créer une seconde fenetre winGoogle
    let winGoogle = new BrowserWindow({
        width: 400,
        height: 400,
        opacity: 0.4,
        webPreferences: {
            nodeIntegration: true
        }
    })

    //Charger l'url de google
    winGoogle.loadURL('https://www.google.com')

}
//Ici, on dit que quand l'application est lancée, on appelle la fonction createWindow().
app.whenReady().then(createWindow)

//Une fois que l’on a choisi l’événement a écouter, on déclenche une fonction fléchée () => { /* instructions */ } dans laquelle on mettra le code qui se produira
//lorsque l'on quitte l’application.
app.on('quit', () => {
    console.log("L'application a été quittée !")
})

//Une fois que l'on a choisi l'événement a écouter, on déclenche une fonction fléchée () => { /* instructions */ } 
//dans laquelle on mettra le code qui se produira lorsque l'application est en premier plan
app.on('browser-window-focus', () => {
    console.log("L'application est en premier plan")
})

//Une fois que l'on a choisi l'événement a écouter, on déclenche une fonction fléchée () => { /* instructions */ } 
//dans laquelle on mettra le code qui se produira lorsque l'application est en arrière plan
app.on('browser-window-blur', () => {
    console.log("L'application est en arrière plan")
})
//Lance la popup d'erreur a partir de ipcMain
ipcMain.on('open-error-dialog', () => {
    dialog.showErrorBox('Message d\'erreur', "Vous avez lancé une alerte !")
})

