var ecranElement = document.getElementById("ecran");
var derniereop = document.getElementById("derniereop")

function afficher(caractere) {
    ecranElement.innerHTML += caractere;
}
function egal(){
    var chaine = ecranElement.innerHTML;
    var resultat = eval(chaine);
    derniereop.innerHTML = chaine + "=" + resultat;
    ecranElement.innerHTML = resultat;
}
