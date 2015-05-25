// DECLARATION DES VARIABLES

var	form = {};
form.text1 = "";

// DECLARATION DES FONCTIONS
form.demarrage = function()
{
	$("#bouton1").on("click", form.calcul);

};
form.calcul = function() 
{
	form.longeur = $("input#longeur").val();
	form.largeur = $("input#largeur").val();
	form.hauteur = $("input#hauteur").val();
	form.resultatSol = form.longeur * form.largeur;
	form.resultatMurs = (2 * form.longeur * form.hauteur) + (2 * form.largeur * form.hauteur);
	$("#affichage").html('Surface du Sol ' + form.resultatSol + ' m2');
	$("#affichage2").html('Surface des murs ' + form.resultatMurs + ' m2');
}

// ACTIVATION DU CODE 

$(form.demarrage);