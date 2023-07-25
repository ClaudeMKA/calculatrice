console.log('dd'); // Affiche "dd" dans la console lorsque la page est chargée.

const buttons = document.querySelectorAll(".bloc_button button"); // Sélectionne tous les boutons dans la classe "bloc_button".

console.log(buttons); // Affiche les boutons sélectionnés dans la console.

const affichage = document.querySelector('.numero_affichage'); // Sélectionne l'élément avec la classe "numero_affichage" qui sera utilisé pour afficher les valeurs et les résultats.

const egale =  document.querySelector('.egale'); // Sélectionne le bouton "=" qui sera utilisé pour effectuer le calcul.

const effacer = document.querySelector('#c'); // Sélectionne le bouton "C" qui sera utilisé pour effacer l'affichage.

buttons.forEach(buttons => {
    buttons.addEventListener("click", () => { // Ajoute un écouteur d'événement pour chaque bouton.
        const value = buttons.textContent; // Récupère la valeur du bouton cliqué.
        console.log(value); // Affiche la valeur du bouton dans la console.

        affichage.innerText += value; // Ajoute la valeur du bouton à l'affichage.
    });
});

egale.addEventListener("click", () => {
    try {
        const expression = affichage.innerText; // Récupère l'expression mathématique à partir de l'affichage.
        const resultat = eval(expression); // Évalue l'expression à l'aide de la fonction eval (à améliorer, voir commentaire précédent).
        affichage.innerText = resultat; // Affiche le résultat dans l'affichage.
    } catch (error) {
        affichage.innerText = "Erreur"; // En cas d'erreur lors du calcul, affiche "Erreur" dans l'affichage.
    }
});

effacer.addEventListener("click", () => {
    affichage.innerText = ''; // Efface le contenu de l'affichage lorsque le bouton "C" est cliqué.
});
