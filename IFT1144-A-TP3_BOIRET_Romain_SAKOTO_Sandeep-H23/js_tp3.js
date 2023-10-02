/**************
 *  PARTIE 1  *
 **************/

// Fonction Permettant de convertir les pouces vers les centimètres.
function convertirPoucesVersCm() {
    var valeur = document.getElementById("valeur").value;
    var resultat = valeur * 2.50;
    document.getElementById("resultat").innerHTML = "pouces --> " + resultat + " cm";
}

// Fonction permettant de convertir les centimètres vers les pouces.
function convertirCmVersPouces() {
    var valeur = document.getElementById("valeur").value;
    var resultat = valeur / 2.50;
    document.getElementById("resultat").innerHTML = "cm --> " + resultat + " pouces";
}

// Fonction permettant de convertir les degrés celcius vers les degrés farenheit.
function convertirCelsiusVersFahrenheit() {
    var valeur = document.getElementById("valeur").value;
    var resultat = valeur * 9 / 5 + 32;
    document.getElementById("resultat").innerHTML = "celcius --> " + resultat.toFixed(1) + " farenheit";
}

// Fonction permettant de convertir les degrés farenheit vers les degrés celcius.
function convertirFahrenheitVersCelsius() {
    var valeur = document.getElementById("valeur").value;
    var resultat = (valeur - 32) * 5 / 9;
    document.getElementById("resultat").innerHTML = "farenheit --> " + resultat.toFixed(1) + " celcius";
}

/**************
 *  PARTIE 2  *
 **************/

// Fonction permettant d'afficher un message avec une police préalablement choisie par l'utilisateur entre 1 et 6.
function afficherMessage() {
    var nom = document.getElementById("nom").value;
    var niveau = document.getElementById("niveau").value;
    var affichagep1 = document.getElementById("affichage");

    if (niveau >= 1 && niveau <= 6) {
        affichagep.innerHTML = "<h" + niveau + " style='color:green;'>Bonjour " + nom + " niveau=" + niveau; "</h" + niveau + ">";
    } else {
        affichagep.innerHTML = "<p style='color:red;'>Erreur : le niveau doit être entre 1 et 6</p>";
    }
}

/**************
 *  PARTIE 3  *
 **************/

// JQuery : Affichage d'un menu de repas avec possibilité de choisir le repas et de calculer le cout total de la facture.
$(document).ready(function(){
    // Initialisation du menu.
    var monMenu = { "Escargot": {cat: "Entree", image: "escargot.jpg", prix: "5.50$"}, 
                    "Salade verte" : {cat: "Entree", image: "salade2.jpg", prix: "5.95$"}, 
                    "Salade César": {cat: "Entree", image: "salade.jpg", prix: "6.95$"}, 
                    
                    "Spaghetti": {cat: "Principal", image: "spaghetti.jpg", prix: "15.95$"}, 
                    "Steak": {cat: "Principal", image: "steak.jpg", prix: "25.95$"}, 
                    "Pizza": {cat: "Principal", image: "pizza.jpg", prix: "17.95$"}, 
                    
                    "Crème glacée": {cat: "Dessert", image: "cremeglacee.jpg", prix: "4.25$"}, 
                    "Gateau": {cat: "Dessert", image: "gateau.jpg", prix: "4.95$"}, 
                    "Pouding": {cat: "Dessert", image: "pouding.jpg", prix: "3.95$"}, 
                    
                    "Café / Thé": {cat: "Boisson", image: "cafe.jpg", prix: "2.50$"}, 
                    "Boisson gazeuse": {cat: "Boisson", image: "boisson.jpg", prix: "2.95$"}};
    // Animation de défilement pour choisir la catégorie de plat.
    $('li').on('click', function(e) {
        if ($(this).hasClass('choisir'))
            return; // Ne rien faire si c'est deja selectionne
        var element = $(this).parent();
        element.find('li').removeClass('choisir').find('ul').hide();
        $(this).addClass('choisir').children('ul').slideToggle(500);
    });
    
    // Affichage de plat précis en fonction de la catégorie préalablement choisie.
    $('li li').on('click', function(e) {
        var choixMenu = monMenu[$(this).html()];
        var idImg = "#img"+choixMenu["cat"];
        var idPrix = "#prix"+choixMenu["cat"];
        var nomFichierImg = "images/"+choixMenu["image"]; 
        var prix = choixMenu["prix"];
        $(idPrix).html(prix);
        $(idImg).attr("src",nomFichierImg);
    })

    // Calcul et affichage du prix sous-total et du prix avec taxes.
    $('button').on('click', function(e) {
        var prixEntree = parseFloat($("#prixEntree").html());
                                
        var prixPrincipal = parseFloat($("#prixPrincipal").html());
        var prixDessert = parseFloat($("#prixDessert").html());
        var prixBoisson = parseFloat($("#prixBoisson").html());
        if (isNaN(prixEntree)) prixEntree = 0;
        if (isNaN(prixPrincipal)) prixPrincipal = 0;
        if (isNaN(prixDessert)) prixDessert = 0;
        if (isNaN(prixBoisson)) prixBoisson = 0;
        var sousTotal = prixEntree + prixPrincipal + prixDessert + prixBoisson;
        var tps = sousTotal * 0.05;
        var tvq = sousTotal * 0.09975;
        var taxes = tvq + tps;
        var total = sousTotal + taxes;
        $('#total').html("Total: " + sousTotal.toFixed(2) +"$ taxes: " + 
                    taxes.toFixed(2) + "$ = " + total.toFixed(2) + "$" );  
    })
})


