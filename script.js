/* =========================================================
   CHANGEMENT DE PAGE
========================================================= */

function showPage(pageId) {

    // Récupération de toutes les pages
    const pages = document.querySelectorAll(".page");


    // Masquer toutes les pages
    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    // Sélectionner la page demandée
    const selectedPage = document.getElementById(pageId);


    // Afficher la page
    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    // Récupérer les boutons de navigation
    const navButtons = document.querySelectorAll(".nav-button");


    // Retirer l'état actif
    navButtons.forEach(function(button) {

        button.classList.remove("active-nav");

    });


    // Chercher le bouton correspondant à la page
    navButtons.forEach(function(button) {

        const action = button.getAttribute("onclick");


        if (action && action.includes("'" + pageId + "'")) {

            button.classList.add("active-nav");

        }

    });


    // Remonter en haut
    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   OUVERTURE / FERMETURE DE LA MOTIVATION
========================================================= */

function toggleMotivation() {


    // Récupérer la zone de motivation
    const motivation =
        document.getElementById("motivation-content");


    // Récupérer la flèche
    const arrow =
        document.getElementById("motivation-arrow");


    // Ajouter ou retirer la classe open
    motivation.classList.toggle("open");


    // Vérifier si la zone est ouverte
    if (motivation.classList.contains("open")) {

        // Faire tourner la flèche
        arrow.style.transform = "rotate(180deg)";

    } else {

        // Remettre la flèche à sa position initiale
        arrow.style.transform = "rotate(0deg)";

    }

}


/* =========================================================
   PAGE D'ACCUEIL AU CHARGEMENT
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    showPage("accueil");

});