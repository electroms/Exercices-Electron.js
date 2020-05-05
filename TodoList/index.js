// le module ipc est utilisé pour envoyer un message du processus de renderer demandant au processus main de lancer la boîte de dialogue d'erreur
//vous pouvez utiliser une boîte de dialogue d'erreur avant l'événement prêt de l'application, utile pour afficher les erreurs au démarrage
const { BrowserWindow } = require('electron').remote
//Chargement du module ipcRenderer sans le .remote
const { ipcRenderer } = require('electron')
const newWindowBtn = document.querySelector('#button')

//Lancer l'événement au click
newWindowBtn.addEventListener("click", function () {
    //Déclaration de la variable winYahoo et création d'une nouvelle fenètre avec ses dimentions
    let winYahoo = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    //Ouverture de la fenètre à l'aide de l'url : yahoo.fr
    winYahoo.loadURL('https://www.yahoo.fr');
    alert('Le bouton à été clicker !');
    winYahoo.show();
})
//Création d'une constante errBtn qui cible le bouton avec l'id btn-alert
const errBtn = document.getElementById('btn-alert')

//Création d'un évenement au click 
errBtn.addEventListener('click', () => {
    ipcRenderer.send('open-error-dialog')
})