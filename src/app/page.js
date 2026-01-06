import React from 'react';
import { Cover } from '../sections/cover';
import { About } from '../sections/about';
import { Projects } from "../sections/projects";
import { Work } from "../sections/work";


export default function Home() {
  return (
    <>
      <section className="bg-white text-black dark:bg-black dark:text-white w-full h-auto">
        <Cover />
        <About />
        <Projects />
        <Work />
      </section>
    </>
  );
}
