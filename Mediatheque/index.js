//Importer les modules
const { BrowserWindow } = require('electron').remote
//Création d'une constante newWindowBtn qui cible le bouton avec l'id button
const newWindowBtn = document.querySelector('#button')
//Lancer l'événement au click
newWindowBtn.addEventListener("click", () => {
    //Création d'une variable winAddElement et création d'une nouvelle fenètre
    let winAddElement = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    //Affichage de la page html add-element.html
    winAddElement.loadFile('add-element.html')
})




