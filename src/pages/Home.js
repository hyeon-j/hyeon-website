import React from "react";
import { Link } from "react-router-dom";

import Intro from "../components/MainPage/Intro/Intro.js";
import About from "../components/MainPage/About/About.js";
import Projects from "../components/MainPage/Projects/Projects.js";
import Contact from "../components/MainPage/Contact/Contact.js";
import Footer from "../components/MainPage/Footer/Footer.js";

export default function main() {
    return (
        <>
            <Intro />
            <hr></hr>
            <About />
            <hr></hr>
            <Projects />
            <hr></hr>
            <Contact />
            <Footer />
        </>
    );
}
