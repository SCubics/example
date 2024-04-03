let display = document.getElementById('display'); // Sélectionne l'élément d'affichage
let resultDisplayed = false; // Variable pour suivre l'affichage du résultat

// Fonction pour ajouter du texte à l'affichage
function appendToDisplay(value) {
    // Si le résultat est affiché et l'utilisateur commence à entrer de nouveaux chiffres,
    // efface le résultat et met à jour la variable resultDisplayed
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }

    // Si le texte actuel est "0" et la valeur ajoutée est un chiffre,
    // remplace "0" par la nouvelle valeur
    if (display.innerText === '0' && !isNaN(parseInt(value))) {
        display.innerText = value;
    } else {
        display.innerText += value; // Ajoute la valeur au texte existant
    }
}

// Fonction pour effacer un chiffre de l'affichage
function backspace() {
    let currentValue = display.innerText;
    display.innerText = currentValue.slice(0, -1); // Supprime le dernier caractère du texte
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    display.innerText = ''; // Efface le texte de l'affichage
}

// Fonction pour effectuer le calcul
function calculate() {
    try {
        let result = eval(display.innerText); // Évalue le texte de l'affichage
        display.innerText = result; // Affiche le résultat
        resultDisplayed = true; // Met à jour la variable pour indiquer que le résultat est affiché
    } catch (error) {
        display.innerText = 'Error'; // Affiche "Error" en cas d'erreur de calcul
        resultDisplayed = true; // Met à jour la variable pour indiquer que le résultat est affiché
    }
}
