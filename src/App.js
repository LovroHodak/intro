import { Introduction } from "./components/Introduction";
import Projects from "./components/Projects";

import { tw } from "./tailwind";

function App() {
  return (
    <div className="flex flex-col gap-32 max-w-6xl m-auto">
      <Header>
        <div>Logo</div>
        <Links>
          <div>About</div>
          <div>Projekti</div>
          <div>Sluzbe</div>
          <div>Technologies</div>
          <div>Contact</div>
          <div>CV</div>
        </Links>
      </Header>
      <Introduction />
      <Projects />
    </div>
  );
}

const Header = tw.nav`
font-bold text-xl text-neutral-800 flex justify-between border-2
`;
const Links =tw.div`
flex gap-2
`

export default App;
