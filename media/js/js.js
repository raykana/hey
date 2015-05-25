// DECLARATION DES VARIABLES

var	form = {};
form.text1 = "";

// DECLARATION DES FONCTIONS
form.demarrage = function()
{
	$("#bouton1").on("click", form.click1);

};
form.click1 = function() 
{
	// alert('click');
	form.text1 = $("input#nom").val();
	// alert(form.text1);
	$("#resultat1").html(form.text1);
}

// ACTIVATION DU CODE 

$(form.demarrage);