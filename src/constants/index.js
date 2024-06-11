import project1 from "../assets/projects/cheap_game_deals_logo.png";
import project2 from "../assets/projects/patify_logo.png";
import project3 from "../assets/projects/portfoly.webp";
import project4 from "../assets/projects/beep_logo.png";


export const HERO_CONTENT = `Hello! I'm Emir, a Fullstack developer with extensive experience in mobile application development. I’ve developed user-friendly and high-performance mobile apps using Flutter. On the backend, I create high-performance API services with Node.js and develop rapid prototypes with Firebase. Additionally, I manage and optimize databases using MongoDB and PostgreSQL. Utilizing modern technologies such as JavaScript and React Native for web development, I provide effective solutions for both mobile and web projects. I believe in the power of teamwork and prioritize working harmoniously with my team members to achieve successful project outcomes. My goal is to create innovative and scalable projects that make life easier through technology.`;

export const ABOUT_TEXT = ` I'm a third-year Management Information Systems student at Lefke European University in Northern Cyprus. I serve as a leader in the IT club, organizing events with my peers. I provide training in software development, sharing my knowledge and experience to help others grow together in the field. I highly value knowledge sharing and love working with enthusiastic individuals to learn new things together in the realm of software development. My goal is to create innovative and scalable projects that make life easier through technology while fostering a collaborative and supportive community.`;

export const EXPERIENCES = [
    {
        year: "2022 - Present",
        role: "Freelance Software Developer",
        company: "Freelance",
        description: `I have developed a mobile application "Cheap Game Deals" that searches every game marketplace and shows the cheapest one, i combined bunch of API's to build this application, and currently developing mobile apps to make life easier.`,
        technologies: ["Flutter", "Dart", "Swift", "React", "NodeJS", "Javascript"],
    },

    {
        year: "2023 - Present",
        role: "IT Club Leader",
        company: "European University of Lefke",
        description: `With my IT club management team and 200 members we are accomplishing and learning new things together. We made events like Flutter Basics, How to use GitHub What Is GitHub?, Fundamentals of User Interface Design, HTML/CSS Basics, Roadmaps to Software Development`,
        technologies: ["Team Management", "Leadership", "Improved Teaching Skills"],
    },

    {
        year: "2022 - 2024 ",
        role: "IT Student Assistant",
        company: "European University of Lefke",
        description: `Monitored and resolved technical support request, and provided beneficial support to colleagues on any IT related issues.`,
        technologies: [],
    },

    {
        year: "2019 - 2020 ",
        role: "IT Assistant Specialist",
        company: "Arvato Bertelsmann Turkey",
        description: `Monitored and resolved technical support request, and provided beneficial support to colleagues on any IT related issues.`,
        technologies: [],
    },
    {
        year: "2018 - 2019 ",
        role: "IT Intern",
        company: "Arvato Bertelsmann Turkey",
        description: `Foundational computer networking knowledge including TCP/IP, LAN/WAN, routing & switching, and network management.`,
        technologies: [],
    },

];

export const PROJECTS = [
    {
        title: "Cheap Game Deals",
        image: project1,
        link: "https://apps.apple.com/us/app/cheap-game-deals/id6455461097",
        description:
            `I have developed a mobile application named "Cheap Game Deals" that searches every game marketplace, compares the price and shows the cheapest game or software product available on Steam, its also showing current free promotions. I have combined bunch of API's to build this application.`,
        technologies: ["Flutter", "Dart"],
    },
    {
        title: "Patify",
        image: project2,
        link: "",
        description:
            "In development...",
        technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
        title: "Portfolio Website",
        image: project3,
        link: "https://www.emir.codes",
        description:
            "A personal portfolio website showcasing my projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Vite", "Javascript"],
    },
    {
        title: "Beep Inventory Manager",
        image: project4,
        link: "https://www.youtube.com/watch?v=QhXybxU67BI",
        description:
            "I made an local inventory manager application for our phone accessory store.",
        technologies: [".NET", "C#", "MSSQL"],
    },
];

export const CONTACT = {
    email: "emir.byteson@gmail.com",
};