/* =========================
   CCTC DISASTER READY PORTAL
   HOME DASHBOARD JAVASCRIPT
========================= */


/* =========================
   START PREPARING BUTTON
========================= */

const startButton = document.querySelector(".primary-button");

startButton.addEventListener("click", function () {

    alert(
        "Let's get prepared! You can start by checking the Emergency Checklist."
    );

});


/* =========================
   EMERGENCY INFO BUTTON
========================= */

const emergencyButton = document.querySelector(".secondary-button");

emergencyButton.addEventListener("click", function () {

    alert(
        "EMERGENCY INFORMATION\n\n" +
        "Stay calm.\n" +
        "Follow official instructions.\n" +
        "Proceed to the designated evacuation area if necessary."
    );

});


/* =========================
   PROFILE BUTTON
========================= */

const profileButton = document.querySelector(".profile-button");

profileButton.addEventListener("click", function () {

    alert(
        "CCTC Disaster Ready Portal\n\n" +
        "User Profile"
    );

});


/* =========================
   QUICK ACCESS CARDS
========================= */

/* =========================
   QUICK ACCESS CARDS
========================= */

const quickCards = document.querySelectorAll(".quick-card");

quickCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Only show alert for cards without a link
        if (card.tagName !== "A") {

            const featureName =
                card.querySelector("h3").textContent;

            alert(
                featureName +
                "\n\nThis feature will open its own page soon."
            );

        }

    });

});


/* =========================
   VIEW ALL BUTTON
========================= */

const viewAllButton =
    document.querySelector(".view-all");


viewAllButton.addEventListener("click", function (event) {

    event.preventDefault();

    alert(
        "All disaster preparedness features will be displayed here."
    );

});


/* =========================
   NAVIGATION LINKS
========================= */

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();


        /* Remove active class */

        navLinks.forEach(function (nav) {

            nav.classList.remove("active");

        });


        /* Add active class */

        link.classList.add("active");


        const pageName =
            link.textContent;


        if (pageName !== "Home") {

            alert(
                pageName +
                " page will be developed soon."
            );

        }

    });

});


/* =========================
   PREPAREDNESS PROGRESS
========================= */

let progress = localStorage.getItem(
    "preparednessProgress"
);


if (progress === null) {

    progress = 75;

} else {

    progress = parseInt(progress);

}


const progressText =
    document.getElementById("progress");


progressText.textContent =
    progress + "%";


/* Save Progress Function */

function updateProgress(newProgress) {

    localStorage.setItem(
        "preparednessProgress",
        newProgress
    );


    progressText.textContent =
        newProgress + "%";

}