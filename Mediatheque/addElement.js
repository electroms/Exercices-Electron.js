const newValidationBtn = document.querySelector('#btn-validation')
//Lancer l'événement au click
newValidationBtn.addEventListener("click", () => {
    //Création d'une constante newInputValue qui cible le bouton avec l'id fname
    const newInputValue = document.querySelector('#fname')
    //Création d'une constante newSelectValue qui cible le bouton avec l'id select1
    const newSelectValue = document.querySelector('#select1')
    //Console.log pour afficher le résultat dans la console de la nouvelle fenètre
    console.log(newInputValue.value)
    console.log(newSelectValue.value)
})