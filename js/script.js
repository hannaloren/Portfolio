/* =========================
   Mobile Navigation Toggle
   Controls opening and closing
   of the hamburger menu on small screens.
========================= */
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-menu a");

/* Opens/closes mobile navigation menu
   when hamburger button is clicked */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});
/* Automatically closes mobile menu
   after selecting a navigation link */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
    });
});
/* =========================
   Active Navigation Highlight
   Detects the current section
   while scrolling and highlights
   the matching navigation link.
========================= */
const sections = document.querySelectorAll("section");
function activateMenu() {

    // Stores the ID of the currently visible section
    let current = "";
    sections.forEach(section => {

        // Adjusts detection area above the section
        // to account for fixed header height
        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;


        // Checks if user has reached this section
        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    // Updates active navigation styling
    navLinks.forEach(link => {

        link.classList.remove("active");
        // Adds active class to matching section link
        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");
        }
    });

}

/* Runs menu activation whenever the page scrolls */
window.addEventListener("scroll", activateMenu);

/* Handles active state when user manually clicks
   a navigation link */
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item =>
            item.classList.remove("active")
        );
        this.classList.add("active");
    });

});

/* Initializes active menu state when page loads */
activateMenu();

/* =========================
   Dynamic Portfolio Content
   Loads information from
   data.json and creates HTML
   elements dynamically.
========================= */

fetch("data.json")

    .then(response => response.json())
    .then(data => {
        /* =========================
           About Cards Section
           Creates reusable information
           cards from JSON data.
        ========================= */

        const aboutContainer = document.querySelector("#about-container");


        data.aboutCards.forEach(card => {


            aboutContainer.innerHTML += `

    <div class="about-card">

        <i class="${card.icon}"></i>

        <div>

            <h3>${card.title}</h3>

            <p>${card.description}</p>

        </div>
    </div>
    `;
        });
        /* =========================
           Skills Section
           Generates skill boxes and
           converts skill arrays into lists.
        ========================= */
        const skillsContainer = document.querySelector("#skills-container");
        data.skills.forEach(skill => {
            skillsContainer.innerHTML += `

    <div class="skill-box">
        <h3>${skill.title}</h3>
        <ul>

            ${skill.items
                    .map(item => `<li>${item}</li>`)
                    .join("")}

        </ul>
    </div>

    `;
        });
        /* =========================
           Journey Timeline
           Builds education/career timeline
           using year, title, and description.
        ========================= */
        const journeyContainer = document.querySelector("#journey-container");
        data.journey.forEach(item => {
            journeyContainer.innerHTML += `

    <div class="timeline-item">
        <div class="year">
            ${item.year}
        </div>
        <div class="timeline-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>

        </div>

    </div>

    `;
        });
        /* =========================
           Projects Section
           Creates project cards including:
           - image
           - description
           - technologies
           - external links
        ========================= */

        const projectsContainer = document.querySelector("#projects-container");
        data.projects.forEach(project => {
            projectsContainer.innerHTML += `
    <article class="project-card">

        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>

        <div class="project-info">

            <span class="project-number">

                ${project.number}

            </span>

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <!-- Generates technology tags dynamically -->
            <div class="tech-stack">

                ${project.technologies
                    .map(tech => `<span>${tech}</span>`)
                    .join("")}

            </div>
            <div class="project-links">
             <a href="${project.link}" target="_blank">

                    <i class="fab fa-github"></i>

                   GitHub

                </a>

            </div>

        </div>

    </article>

    `;

        });
        /* =========================
           Statistics Section
           Generates achievement counters
           from JSON data.
        ========================= */

        const statsContainer = document.querySelector("#stats-container");


        data.statistics.forEach(stat => {


            statsContainer.innerHTML += `

    <div class="stat-box">


        <h2>${stat.number}</h2>


        <p>${stat.label}</p>


    </div>

    `;

        });
        /* =========================
           Beyond / Interests Section
           Creates cards for hobbies,
           interests, or personal details.
        ========================= */

        const beyondContainer = document.querySelector("#beyond-container");


        data.beyond.forEach(item => {


            beyondContainer.innerHTML += `

    <div class="interest">

        <h3>${item.title}</h3>
        <p>${item.description}</p>
    </div>
    `;
        });

    })

    /* =========================
       Error Handling
       Displays an error in the
       browser console if JSON loading fails.
    ========================= */

    .catch(error => console.error("Error loading JSON:", error));