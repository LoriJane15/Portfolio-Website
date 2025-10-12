
// Toggle navbar
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Achievement
function showAchievement(certTitle, certDescription) {
  document.getElementById("achievement-description").innerHTML = `
    <h4>${certTitle}</h4>
    <p>${certDescription}</p>
  `;
}

// Projects Data
const projects = [
  {
    type: "video",
    src: "src/videos/SecondLifeCommercialFinal.mp4",
    title: "SecondLife",
    text: "SecondLife is a mobile app that allows users to donate, trade, or sell secondhand items with ease. It features quick item uploads, in-app messaging, and a community-driven platform that promotes sustainability by giving new life to reusable items."
  },
  {
    type: "video",
    src: "src/videos/STUDENT_ORGANIZATION_MONITORING_SYSTEM.mp4",
    title: "Student Organization Monitoring System",
    text: "A desktop application developed in VB.NET that helps student organizations manage their activities more efficiently. It enables tracking of events, attendance, and members while ensuring accurate records and smoother workflows. Designed for the Department of Technical Programs, it promotes better organization management and encourages student involvement."
  },
  {
    type: "image",
    src: "src/img/JUMAWAN_Receipt.png",
    title: "Receipt Generator",
    text: "A console-based program developed in Java using VS Code. It processes product entries, calculates totals, VAT, and change, and generates a formatted purchase receipt. This project demonstrates my skills in Java programming, problem-solving, and handling real-world transaction logic."
  },
  {
    type: "image",
    src: "src/img/passGen.png",
    title: "Password Generator",
    text: "This project is a console-based Password Generator that creates secure passwords based on user input. It validates entries to ensure the length is numeric and at least five characters, then generates a strong password using a mix of letters, numbers, and symbols. It highlights skills in input validation, error handling, and randomization."
  },
  {
    type: "image",
    src: "src/img/zodiac.png",
    title: "Zodiac Sign and Horoscope Generator",
    text: "This project takes the user’s name and date of birth as input to calculate their age and determine their zodiac sign. It then displays a personalized horoscope for the year, providing an engaging way to connect programming with astrology. The program demonstrates skills in handling user input, date manipulation, and conditional logic."
  },
  {
    type: "image",
    src: "src/img/average.png",
    title: "Student Grades Calculator",
    text: "This project is a Student Grades Calculator that allows users to input the number of students and subjects, then record each student’s grades. The program processes the input, organizes the data into a table, and computes the average grade for each student. It demonstrates skills in handling user input, looping structures, data organization, and basic mathematical computations, making it a practical tool for managing and summarizing student performance."
  },
   {
    type: "image",
    src: "src/img/guessingGame.png",
    title: "Guessing Game",
    text: "This project is a Number Guessing Game where the program randomly selects a number between 1 and 10, and the player must guess it within three attempts. After each guess, the program provides feedback if the guess is wrong, and congratulates the player upon a correct answer. It highlights basic programming concepts such as random number generation, conditional statements, loops, and user interaction, while providing a fun and engaging gameplay experience."
  },
  {
    type: "image",
    src: "src/img/batopick.png",
    title: "Bato Bato Pick",
    text: "This project is a Bato Bato Pick (Rock-Paper-Scissors) Game where the player competes against the computer in multiple rounds. The player selects their move (rock, paper, or scissors), and the computer randomly generates its choice. The program determines the winner of each round, keeps track of the score, and declares the final winner at the end of the match. It also allows players to place a bet on who they think will win, adding an engaging twist to the classic game. This project demonstrates logic building, randomization, conditional statements, and score tracking in programming."
  },
];

let currentProject = 0;
const projectTitle = document.getElementById("project-title");
const projectText = document.getElementById("project-text");
const mediaContainer = document.getElementById("project-media-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showProject(index) {
  const project = projects[index];
  
  // Clear existing content
  mediaContainer.innerHTML = "";

  if (project.type === "video") {
    const video = document.createElement("video");
    video.src = project.src;
    video.autoplay = true;
    video.muted = true; // autoplay only works if muted
    video.loop = true;
    video.controls = true;
    video.classList.add("project-media");
    mediaContainer.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = project.src;
    img.alt = project.title;
    img.classList.add("project-media");
    mediaContainer.appendChild(img);
  }

  projectTitle.textContent = project.title;
  projectText.textContent = project.text;
}

prevBtn.addEventListener("click", () => {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  showProject(currentProject);
});

nextBtn.addEventListener("click", () => {
  currentProject = (currentProject + 1) % projects.length;
  showProject(currentProject);
});

// Initialize
showProject(currentProject);


