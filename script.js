function Ajout(num)
{

document.calculatrice.affichage.value += num;

}

function calculer() {

    document.calculatrice.affichage.value =eval(document.calculatrice.affichage.value);
 
}
function fctspecial(Fctname) {
    document.calculatrice.affichage.value = Math[Fctname](eval (document.calculatrice.affichage.value));

}


function delt() {
    document.calculatrice.affichage.value =("");
    
}
