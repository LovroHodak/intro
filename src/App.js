import Contact from "./components/Contact";
import { Introduction } from "./components/Introduction";
import IntroMore from "./components/IntroMore";
import Jobs from "./components/Jobs";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import Projects from "./components/Projects";

import { tw } from "./tailwind";

function App() {
  return (
    <div className="flex flex-col gap-32 max-w-6xl m-auto">
      <Header>
        <Logo />
        <NavLinks />
      </Header>
      <Introduction />
      <IntroMore />
      <Projects />
      <Jobs />
      <Contact />
    </div>
  );
}

const Header = tw.nav`
font-bold text-xl text-neutral-800 flex justify-between 
`;

export default App;
