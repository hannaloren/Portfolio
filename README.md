# Hanna Loren | Personal Portfolio Website

## Project Overview

**Hanna Loren | Personal Portfolio** is a responsive and dynamic personal website developed as the final project for **Web Development 1**. The website showcases my background, skills, academic journey, projects, interests, and contact information in a modern and organized interface.

Unlike a traditional static portfolio, this website separates its content from its structure by storing repeatable information inside a **JSON file**. JavaScript dynamically loads and renders the data, making the website easier to maintain and expand. Whenever new skills, projects, or educational experiences are added to the JSON file, they automatically appear on the website without requiring changes to the HTML.

The design follows a clean and elegant aesthetic inspired by modern portfolio websites, emphasizing readability, responsive layouts, and user experience.

---

# Features

* Responsive design for mobile, tablet, and desktop devices
* Dynamic content loaded from an external JSON file
* Interactive navigation with active section highlighting
* Mobile-friendly hamburger navigation menu
* Personal introduction and biography
* Skills section generated dynamically from JSON
* Educational timeline displayed dynamically
* Dynamic project showcase with images and GitHub links
* Statistics section highlighting achievements
* Beyond Coding section featuring hobbies and personal interests
* Contact section with direct links to email, GitHub, and LinkedIn
* Modern card-based interface with hover animations and smooth scrolling

---

# Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Design Techniques

* CSS Grid
* Flexbox
* Media Queries
* Responsive Web Design
* CSS Variables
* Glassmorphism-inspired Navigation
* Card-based UI Design

### External Resources

* Google Fonts
* Font Awesome Icons

### Data Handling

* JSON
* JavaScript Fetch API

---

# Project Structure

```
Portfolio/
│
├── index.html
├── data.json
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
└── assets/
    ├── hanna.png
    ├── hangman.png
    ├── quizify.png
    ├── shopping.png
    └── himaya.png
```

---

# Website Sections

## Home

The landing page introduces me as a Computer Science student with a short personal introduction, profile photograph, and links to my GitHub, LinkedIn, and email. It serves as the first impression of my portfolio while encouraging visitors to explore my work.

---

## About Me

This section tells the story of how I discovered programming and why I chose Computer Science. It highlights my passion for creating meaningful technology and my long-term goal of becoming a developer who builds solutions that positively impact people's lives.

---

## Skills

The Skills section displays my technical knowledge and development tools, including frontend technologies, programming languages, design software, and development tools. The content is dynamically generated from the JSON file.

---

## Education Journey

The Journey section presents my learning timeline, beginning with my introduction to programming in junior high school through my current studies in Computer Science. Each milestone demonstrates how my knowledge and experience continue to grow over time.

---

## Projects

This section showcases several academic and personal projects that demonstrate my programming and web development skills.

Featured projects include:

* Hangman Game
* Java Quiz System (Quizify)
* Shopping Management System
* Himaya Cosmetics Website Prototype

Each project contains an image, description, technologies used, and a link to its repository or prototype.

---

## Statistics

The Statistics section summarizes my growth as a developer by presenting highlights such as completed academic projects, programming languages learned, dedication, and continuous curiosity to learn.

---

## Beyond Coding

Technology is only one part of who I am. This section introduces my hobbies and interests outside programming, including reading, art, museums, music, crocheting, nature, and slow living. These interests inspire my creativity and influence my approach to problem solving and design.

---

## Contact

Visitors can connect with me through my email, GitHub, or LinkedIn. This section provides an easy way to reach me for collaborations, internship opportunities, or professional networking.

---

# Dynamic Content

One of the main objectives of this project is separating content from presentation.

Instead of hardcoding repeatable information directly into the HTML, the following sections are stored inside **data.json** and loaded dynamically using JavaScript:

* About Cards
* Skills
* Education Journey
* Projects
* Statistics
* Beyond Coding

The Fetch API retrieves the JSON data and automatically generates the corresponding HTML elements. This approach makes the website scalable because adding new content only requires updating the JSON file.

---

# Responsive Design

The website follows responsive web design principles to ensure a consistent experience across different devices.

Supported layouts include:

* Mobile (375px–480px)
* Tablet (768px)
* Desktop (1200px and above)

CSS Grid, Flexbox, media queries, and flexible sizing techniques are used to create layouts that adapt smoothly to different screen sizes.

---

# Learning Outcomes

Through this project, I was able to:

* Build a fully responsive website from scratch
* Organize code using semantic HTML
* Create reusable layouts with CSS Grid and Flexbox
* Load external data using JavaScript Fetch API
* Generate dynamic website content using JSON
* Improve UI/UX design principles
* Practice project organization and file management
* Develop a modern portfolio suitable for future academic and professional use

---

# Developer

**Hanna Loren Obra**

Bachelor of Science in Computer Science

Lorma Colleges

GitHub: https://github.com/hannaloren

LinkedIn: https://www.linkedin.com/in/hanna-loren-obra-a89402393/

Email: [hannaloren.obra@lorma.edu](mailto:hannaloren.obra@lorma.edu)
