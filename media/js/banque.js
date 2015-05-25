// DECLARATION DES VARIABLES

var form 		= {};
nbBillets 		= 0;



form.tableauImages = [
						'<img src="media/img/euros/euros-500.jpg">',
						'<img src="media/img/euros/euros-200.jpg">',
						'<img src="media/img/euros/euros-100.jpg">',
						'<img src="media/img/euros/euros-50.jpg">',
						'<img src="media/img/euros/euros-20.jpg">',
						'<img src="media/img/euros/euros-10.jpg">',
						'<img src="media/img/euros/euros-5.jpg">'
					];

form.tableauBillets = [500, 200, 100, 50, 20, 10, 5];

// DECLARATION DES FONCTIONS
form.demarrage = function()
{
	form.compte();
	$("#bouton1").on("click", form.calcul);
	$("#releve").on("click", form.compte);

};

form.calcul = function() 
{
	form.montant = $("input#montant").val();
	form.montantDebut = $("input#montant").val();

	$("#affichage").html('');

	if(form.montant%5 == 0 && form.montant > 0)
	{
		if(form.montant <= form.argent) 
		{
			for(i=0; i < form.tableauBillets.length; i++)
			{
				nbBillets = Math.floor(form.montant / form.tableauBillets[i]);
				
				for(i2=0; i2 < nbBillets; i2++)
					{
						$("#affichage").append(form.tableauImages[i] + '<br>');
					}

				form.montant = form.montant % form.tableauBillets[i];
			}

			form.argent = form.argent - form.montantDebut;
			$('#compte').val(form.argent);

		}
		else
		{
			$("#affichage").html("Vous n'avez pas assez d'argent sur votre compte");
		}
	}
	else 
	{
		$("#affichage").html("Montant invalide ! (>0 et % 5)");
	}
}

form.compte = function()
{
	form.argent = Math.floor((Math.random() * 1000) + 5);
	// alert(form.random);
	$('#compte').val(form.argent);
}

// ACTIVATION DU CODE 

$(form.demarrage);