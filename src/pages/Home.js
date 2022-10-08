import React from "react";
import { Link } from "react-router-dom";

import Intro from "../components/MainPage/Intro/Intro.js";
import About from "../components/MainPage/about/About.js";
import Projects from "../components/MainPage/projects/Projects.js";

export default function main() {
  return (
    <>
      <Intro />
      <hr></hr>
      <About />
      <hr></hr>
      <Projects />
    </>
  );
}
