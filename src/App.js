import React, { useRef } from "react";
import { tw } from "./tailwind";

import Contact from "./components/Contact";
import { Introduction } from "./components/Introduction";
import IntroMore from "./components/IntroMore";
import Jobs from "./components/Jobs";
import Navbarr from "./components/Navbarr";
import Projects from "./components/Projects";

console.log("%c Hello there!", 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')

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
