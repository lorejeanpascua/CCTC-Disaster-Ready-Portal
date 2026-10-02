/* =========================
   CCTC DISASTER READY PORTAL
   SHARED JAVASCRIPT
========================= */


/* =========================
   START PREPARING BUTTON
========================= */

const startButton = document.querySelector(".primary-button");

if (startButton) {

    startButton.addEventListener("click", function () {

        const href = startButton.getAttribute("href");

        if (!href || href === "#") {

            alert(
                "Let's get prepared! You can start by checking the Emergency Checklist."
            );

        }

    });

}


/* =========================
   EMERGENCY INFO BUTTON
========================= */

const emergencyButton = document.querySelector(".secondary-button");

if (emergencyButton) {

    emergencyButton.addEventListener("click", function () {

        const href = emergencyButton.getAttribute("href");

        if (!href || href === "#") {

            alert(
                "EMERGENCY INFORMATION\n\n" +
                "Stay calm.\n" +
                "Follow official instructions.\n" +
                "Proceed to the designated evacuation area if necessary."
            );

        }

    });

}


/* =========================
   PROFILE BUTTON
========================= */

const profileButton = document.querySelector(".profile-button");

if (profileButton) {

    profileButton.addEventListener("click", function () {

        const currentUser =
            JSON.parse(localStorage.getItem("cctcCurrentUser"));

        if (currentUser) {
            window.location.href = "profile.html";
        } else {
            window.location.href = "auth.html";
        }

    });

}


/* =========================
   QUICK ACCESS CARDS
/* =========================
   QUICK ACCESS CARDS
========================= */

const quickCards = document.querySelectorAll(".quick-card");

const quickAccessPages = {

    "Disaster Guides": "disaster-guides.html",

    "Emergency Checklist": "emergency-checklist.html",

    "Family Emergency Plan": "family-emergency-plan.html",

    "Campus Evacuation Map": "campus-evacuation-map.html",

    "Emergency Contacts": "emergency-contacts.html",

    "Hazard Reporting": "hazard-reporting.html",

    "First Aid Tutorials": "first-aid-tutorials.html",

    "Emergency Go Bag": "emergency-go-bag.html"

};


quickCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const title = card.querySelector("h3");

        if (!title) {
            return;
        }

        const featureName = title.textContent.trim();

        const page = quickAccessPages[featureName];

        if (page) {

            window.location.href = page;

        }

    });

});


/* =========================
   VIEW ALL BUTTON
========================= */

const viewAllButton = document.querySelector(".view-all");

if (viewAllButton) {

    viewAllButton.addEventListener("click", function (event) {

        const href = viewAllButton.getAttribute("href");

        if (href && href !== "#") {

            return;

        }

        event.preventDefault();

        alert(
            "All disaster preparedness features will be displayed here."
        );

    });

}


/* =========================
   NAVIGATION LINKS
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const href = link.getAttribute("href");

        /*
           If the link already has a real page,
           allow normal navigation.
        */

        if (href && href !== "#") {

            return;

        }

        event.preventDefault();

        navLinks.forEach(function (nav) {

            nav.classList.remove("active");

        });

        link.classList.add("active");

        const pageName = link.textContent.trim();

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

const progressText = document.getElementById("progress");

if (progressText) {

    let progress = localStorage.getItem(
        "preparednessProgress"
    );

    if (progress === null) {

        progress = 75;

    } else {

        progress = parseInt(progress);

        if (isNaN(progress)) {

            progress = 75;

        }

    }

    progressText.textContent =
        progress + "%";


    function updateProgress(newProgress) {

        localStorage.setItem(
            "preparednessProgress",
            newProgress
        );

        progressText.textContent =
            newProgress + "%";

    }

}


/* =========================
   GENERAL PAGE READY MESSAGE
========================= */

console.log(
    "CCTC Disaster Ready Portal loaded successfully."
);
/* =========================
   HAZARD REPORTING
========================= */

const submitHazardReport =
    document.getElementById("submitHazardReport");

const hazardReportMessage =
    document.getElementById("hazardReportMessage");


if (submitHazardReport) {

    submitHazardReport.addEventListener(
        "click",
        function () {

            const hazardType =
                document.getElementById("hazardType").value;

            const hazardLocation =
                document.getElementById("hazardLocation").value.trim();

            const hazardDescription =
                document.getElementById("hazardDescription").value.trim();

            const hazardSeverity =
                document.getElementById("hazardSeverity").value;

            const reporterName =
                document.getElementById("reporterName").value.trim();

            const reporterContact =
                document.getElementById("reporterContact").value.trim();


            if (
                !hazardType ||
                !hazardLocation ||
                !hazardDescription ||
                !hazardSeverity ||
                !reporterName
            ) {

                hazardReportMessage.textContent =
                    "Please complete all required fields.";

                return;

            }


            const hazardReport = {

                hazardType: hazardType,

                location: hazardLocation,

                description: hazardDescription,

                severity: hazardSeverity,

                reporterName: reporterName,

                reporterContact: reporterContact,

                dateReported:
                    new Date().toLocaleString()

            };


            const existingReports =
                JSON.parse(
                    localStorage.getItem(
                        "hazardReports"
                    )
                ) || [];


            existingReports.push(hazardReport);


            localStorage.setItem(
                "hazardReports",
                JSON.stringify(existingReports)
            );


            hazardReportMessage.textContent =
                "Hazard report submitted successfully.";


            document.getElementById(
                "hazardType"
            ).value = "";

            document.getElementById(
                "hazardLocation"
            ).value = "";

            document.getElementById(
                "hazardDescription"
            ).value = "";

            document.getElementById(
                "hazardSeverity"
            ).value = "";

            document.getElementById(
                "reporterName"
            ).value = "";

            document.getElementById(
                "reporterContact"
            ).value = "";

        }
    );

}
/* =========================
   EMERGENCY GO BAG
========================= */

const goBagCheckboxes =
    document.querySelectorAll(".go-bag-checkbox");

const goBagProgress =
    document.getElementById("goBagProgress");

const clearGoBag =
    document.getElementById("clearGoBag");

const goBagMessage =
    document.getElementById("goBagMessage");


if (
    goBagCheckboxes.length > 0 &&
    goBagProgress
) {

    const savedGoBag =
        JSON.parse(
            localStorage.getItem("emergencyGoBag")
        ) || {};


    function updateGoBagProgress() {

        let checkedItems = 0;


        goBagCheckboxes.forEach(function (checkbox) {

            if (checkbox.checked) {

                checkedItems++;

            }

        });


        const totalItems =
            goBagCheckboxes.length;


        const percentage =
            Math.round(
                (checkedItems / totalItems) * 100
            );


        goBagProgress.textContent =
            percentage + "%";


        localStorage.setItem(
            "emergencyGoBag",
            JSON.stringify(
                Array.from(goBagCheckboxes).reduce(
                    function (items, checkbox) {

                        items[checkbox.dataset.item] =
                            checkbox.checked;

                        return items;

                    },
                    {}
                )
            )
        );

    }


    goBagCheckboxes.forEach(function (checkbox) {

        const item =
            checkbox.dataset.item;


        if (savedGoBag[item]) {

            checkbox.checked = true;

        }


        checkbox.addEventListener(
            "change",
            function () {

                updateGoBagProgress();

                if (goBagMessage) {

                    goBagMessage.textContent =
                        "Checklist progress saved.";

                }

            }
        );

    });


    updateGoBagProgress();


    if (clearGoBag) {

        clearGoBag.addEventListener(
            "click",
            function () {

                goBagCheckboxes.forEach(
                    function (checkbox) {

                        checkbox.checked = false;

                    }
                );


                localStorage.removeItem(
                    "emergencyGoBag"
                );


                updateGoBagProgress();


                if (goBagMessage) {

                    goBagMessage.textContent =
                        "Go bag checklist has been reset.";

                }

            }
        );

    }

}
/* =========================
   LOGIN / SIGNUP
========================= */

const authForm = document.getElementById("authForm");

if (authForm) {

    const authTitle = document.getElementById("authTitle");
    const authSubtitle = document.getElementById("authSubtitle");
    const authSubmit = document.getElementById("authSubmit");
    const nameField = document.getElementById("nameField");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const authMessage = document.getElementById("authMessage");
    const authSwitch = document.getElementById("authSwitch");
    const authSwitchText = document.getElementById("authSwitchText");

    let authMode = "login";

    function setAuthMode(mode) {
        authMode = mode;
        authMessage.textContent = "";

        const isSignup = authMode === "signup";

        authTitle.textContent = isSignup ? "Create Your Account" : "Welcome Back";
        authSubtitle.textContent = isSignup
            ? "Create an account to save your preparedness progress."
            : "Log in to continue to your Disaster Ready profile.";
        authSubmit.innerHTML = isSignup
            ? '<i class="fa-solid fa-user-plus"></i> Create Account'
            : '<i class="fa-solid fa-right-to-bracket"></i> Log In';

        nameField.hidden = !isSignup;
        nameInput.required = isSignup;

        authSwitchText.textContent = isSignup
            ? "Already have an account?"
            : "Don't have an account?";
        authSwitch.textContent = isSignup ? "Log In" : "Sign Up";
    }

    authSwitch.addEventListener("click", function () {
        setAuthMode(authMode === "login" ? "signup" : "login");
    });

    authForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim().toLowerCase();
        const password = passwordInput.value;
        const users = JSON.parse(localStorage.getItem("cctcUsers")) || [];

        if (!email || !password) {
            authMessage.textContent = "Please enter your email and password.";
            return;
        }

        if (authMode === "signup") {

            const name = nameInput.value.trim();

            if (!name) {
                authMessage.textContent = "Please enter your full name.";
                return;
            }

            const existingUser = users.find(function (user) {
                return user.email === email;
            });

            if (existingUser) {
                authMessage.textContent = "An account with this email already exists.";
                return;
            }

            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                password: password,
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem("cctcUsers", JSON.stringify(users));
            localStorage.setItem("cctcCurrentUser", JSON.stringify(newUser));

            window.location.href = "profile.html";
            return;
        }

        const user = users.find(function (item) {
            return item.email === email && item.password === password;
        });

        if (!user) {
            authMessage.textContent = "Incorrect email or password.";
            return;
        }

        localStorage.setItem("cctcCurrentUser", JSON.stringify(user));
        window.location.href = "profile.html";
    });

    setAuthMode("login");
}


/* =========================
   PROFILE PAGE
========================= */

const profilePage = document.getElementById("profilePage");

if (profilePage) {

    const currentUser =
        JSON.parse(localStorage.getItem("cctcCurrentUser"));

    if (!currentUser) {

        window.location.href = "auth.html";

    } else {

        document.getElementById("profileName").textContent = currentUser.name;
        document.getElementById("profileEmail").textContent = currentUser.email;
        document.getElementById("profileInitial").textContent =
            currentUser.name.charAt(0).toUpperCase();

        const date = new Date(currentUser.createdAt);

        document.getElementById("memberSince").textContent =
            "Member since " +
            date.toLocaleDateString(undefined, {
                month: "long",
                year: "numeric"
            });

        const progress =
            parseInt(localStorage.getItem("preparednessProgress")) || 75;

        document.getElementById("profileProgress").textContent =
            progress + "%";
        document.getElementById("profileProgressValue").textContent =
            progress + "%";
        document.getElementById("profileProgressBar").style.width =
            progress + "%";

        const goBag =
            JSON.parse(localStorage.getItem("emergencyGoBag")) || {};

        const completedGoBag =
            Object.values(goBag).filter(Boolean).length;

        document.getElementById("goBagCount").textContent =
            completedGoBag;

        document.getElementById("logoutButton").addEventListener("click", function () {
            localStorage.removeItem("cctcCurrentUser");
            window.location.href = "index.html";
        });
    }
}
