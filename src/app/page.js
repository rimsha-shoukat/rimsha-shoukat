import React from 'react';
import { Navbar } from '../components/navbar';
import { Cover } from '../sections/cover';
import { About } from '../sections/about';
import { Projects } from "../sections/projects";
import { Experience } from "../sections/experience";
import { Contact } from "../sections/contact";

export default function Home() {
  return (
    <>
      <section className="bg-white text-black dark:bg-black dark:text-white w-full h-auto">
        <Navbar />
        <section id="home">
          <Cover />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </section>
    </>
  );
}
