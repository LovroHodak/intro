import React, { useRef } from "react";
import { tw } from "./tailwind";

import Contact from "./components/Contact";
import { Introduction } from "./components/Introduction";
import IntroMore from "./components/IntroMore";
import Jobs from "./components/Jobs";
import Navbarr from "./components/Navbarr";
import Projects from "./components/Projects";

function App() {
  const projectsRef = useRef();
  const jobsRef = useRef();
  const contactRef = useRef();

  return (
    <AppContainer>
      {/* to NAVBAR refrences are sent as Props */}
      <Navbarr
        projectsRef={projectsRef}
        jobsRef={jobsRef}
        contactRef={contactRef}
      />
      <Introduction />
      <IntroMore />
      {/* to Components refrences are sent as Refs */}
      <Projects ref={projectsRef} someProp="Heeej" />
      <Jobs ref={jobsRef} />
      <Contact ref={contactRef} />
    </AppContainer>
  );
}

const AppContainer = tw.div`
flex flex-col gap-16 max-w-6xl m-auto
`;

export default App;
