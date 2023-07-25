console.log('dd')
const buttons = document.querySelectorAll(".bloc_button button");
console.log(buttons)
const affichage = document.querySelector('.numero_affichage')
const egale =  document.querySelector('.egale')
const effacer = document.querySelector('#c')


buttons.forEach(buttons=>{
    buttons.addEventListener("click",()=> {
        const  value = buttons.textContent;
        console.log(value)

        affichage.innerText += value
    })

})

egale.addEventListener("click",()=>{
    try {
        const expression = affichage.innerText;
        const resultat = eval(expression);
        affichage.innerText = resultat;
    } catch (error) {
        affichage.innerText = "Erreur";
    }
})

effacer.addEventListener("click",()=>{
    affichage.innerText = ''
})