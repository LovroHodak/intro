import React, { useRef, useEffect, useState } from "react";
import Contact from "./components/Contact";
import { Introduction } from "./components/Introduction";
import IntroMore from "./components/IntroMore";
import Jobs from "./components/Jobs";
import Logo from "./components/Logo";
import Navbarr from "./components/Navbarr";
import NavLinks from "./components/NavLinks";
import Projects from "./components/Projects";

import { tw } from "./tailwind";

function App() {
  const projectsRef = useRef();

  



  useEffect(() => {
    console.log(projectsRef.current);
  });

  return (
    <div className="flex flex-col gap-16 max-w-6xl m-auto">
      <Navbarr projectsRef={projectsRef} />

      <Introduction />
      <IntroMore />
      <Projects ref={projectsRef} someProp="Heeej" />
      <Jobs />
      <Contact />
    </div>
  );
}

export default App;
