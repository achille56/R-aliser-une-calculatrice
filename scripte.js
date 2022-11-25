function calculer() {
    let a = document.getElementById("saisie").value
    let b = eval(a)
    document.getElementById("saisie").value = b
}

function afficher(aff) {
    document.getElementById("saisie").value+=aff
}

function effacer() {
    document.getElementById("saisie").value = ""
}

let calcul = document.getElementById("calculatrice");
    calcul.style.display