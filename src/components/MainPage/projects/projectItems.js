import sortImage from "./images/sorting.jpg";
import apiImage from "./images/api.JPG";

export const featuredProjectsList = [
    {
        title: "SORTING ALGORITHM VISUALIZER",
        description:
            "Interactive Merge, Bubble & Quick Sort algorithm visualizer. Able to customize amounts of bar and animation speed.",
        interactive_link: "/sort",
        github_link:
            "https://github.com/hyeon-j/hyeon-website/tree/master/src/pages/Sort",
        tags: ["JavaScript", "React"],
        pictureURL: sortImage,
    },
    {
        title: "IMDb & CORONA VIRUS API",
        description:
            "Search IMDb for actors or movies/shows with a keyword. Shows most recent Corona Virus Statistics",
        interactive_link: "/api",
        github_link:
            "https://github.com/hyeon-j/hyeon-website/tree/master/src/pages/Api",
        tags: ["JavaScript", "React"],
        pictureURL: apiImage,
    },
];

export const ProjectsList = [
    {
        title: "HEART FAILURE PREDICTION",
        description:
            "Predict patient's heart disease by patient's medical history/status using different models. Display the analytics of the predictions (Classification report, confusion metric, etc.).",
        github_link: "https://github.com/hyeon-j/heartfailure-machinelearning",
        tags: ["Python", "scikit-learn", "Machine Learning"],
    },
    {
        title: "BANK SUBSCRIPTION PREDICTION",
        description:
            "Predict user subscription by user's bank and personal status using different models. Display the analytics of the predictions (Classification report, confusion metric, etc.). Implemented my own K-Means and Bisect algorithm for this project. Visualize the clusters using Matplotlab.",
        github_link: "https://github.com/hyeon-j/bank-machinelearning",
        tags: ["Python", "scikit-learn", "Machine Learning"],
    },
    {
        title: "BOOKSTORE",
        description:
            "Created a simple bookstore website using Python, sqlite, Flask, HTML/CSS. It has multiple functionalities for searching for book based on different criteria. Functionalities for user reviews, wishlist, cart and purchasing. It updates the database according to each action. Secure login and admin user functionalities.",
        github_link: "https://github.com/hyeon-j/Bookstore",
        tags: ["Python", "Flask", "sqlite3", "Database", "HTML"],
    },
    {
        title: "INDEED.COM WEB SCRAPPER USING GOLANG",
        description:
            "Indeed.com Web Scrapper built using GoLang. Enter job title, keywords or company and returns the search results in CSV file with information about the company.",
        github_link: "https://github.com/hyeon-j/learngo",
        tags: ["GoLang", "Web Scrapper"],
    },
];
