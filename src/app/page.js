import React from 'react';
import { Cover } from '../sections/cover';

export default function Home() {
  return (
    <>
      <section className="bg-white text-black dark:bg-black dark:text-white w-full h-full">
        <Cover />
      </section>
    </>
  );
}
