// App.js
import React from "react";
import './App.css';

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Education from "./components/Education";

import { projects, skills, testimonials, education } from "./data";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Education education={education} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </main>
  );
}
