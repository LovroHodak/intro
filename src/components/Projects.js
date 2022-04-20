import React, { useRef, forwardRef } from "react";
import { tw } from "../tailwind";
import { motion } from "framer-motion";
import { useOnScreen } from "./use-on-screen";



export default forwardRef (function Projects({someProp}, ref) {
console.log(ref)

  return (
    <Project className="flex flex-col gap-8" >
      <Title ref={ref}>Projects {someProp}</Title>
      <div className="flex flex-col gap-4" >
        <Item
          title="CurveZZZZ"
          image="https://www.hkolimpija.si/wp-content/uploads/2020/09/kukovi%C4%8D-scaled.jpg"
          github="https://github.com/LovroHodak/CurveZZZZ"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
        >
          Stay alive. Don't hit the wall, other player or yourself. Using two
          buttons you can move in every direction. Additional two buttons can
          turn on TURBO mode and Pause game. Fun multiplayer game.Stay alive.
          Don't hit the wall, other player or yourself. Using two buttons you
          can move in every direction. Additional two buttons can turn on TURBO
          mode and Pause game. Fun multiplayer game.Stay alive. Don't hit the
          wall, other player or yourself. Using two buttons you can move in
          every direction. Additional two buttons can turn on TURBO mode and
          Pause game. Fun multiplayer game.
        </Item>
        <Item
          title="CurveZZZZ"
          image="https://www.hkolimpija.si/wp-content/uploads/2020/09/kukovi%C4%8D-scaled.jpg"
          github="https://github.com/LovroHodak/CurveZZZZ"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
        >
          Stay alive. Don't hit the wall, other player or yourself. Using two
          buttons you can move in every direction. Additional two buttons can
          turn on TURBO mode and Pause game. Fun multiplayer game.Stay alive.
          Don't hit the wall, other player or yourself. Using two buttons you
          can move in every direction. Additional two buttons can turn on TURBO
          mode and Pause game. Fun multiplayer game.Stay alive. Don't hit the
          wall, other player or yourself. Using two buttons you can move in
          every direction. Additional two buttons can turn on TURBO mode and
          Pause game. Fun multiplayer game.
        </Item>
        <Item
          title="CurveZZZZ"
          image="https://www.hkolimpija.si/wp-content/uploads/2020/09/kukovi%C4%8D-scaled.jpg"
          github="https://github.com/LovroHodak/CurveZZZZ"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
        >
          Stay alive. Don't hit the wall, other player or yourself. Using two
          buttons you can move in every direction. Additional two buttons can
          turn on TURBO mode and Pause game. Fun multiplayer game.Stay alive.
          Don't hit the wall, other player or yourself. Using two buttons you
          can move in every direction. Additional two buttons can turn on TURBO
          mode and Pause game. Fun multiplayer game.Stay alive. Don't hit the
          wall, other player or yourself. Using two buttons you can move in
          every direction. Additional two buttons can turn on TURBO mode and
          Pause game. Fun multiplayer game.
        </Item>
        <Item
          myGitHub="https://github.com/LovroHodak"
          title="See more on Github"
        />
      </div>
    </Project>
  );
})

function Item({ title, image, github, webSite, myGitHub, children }) {
  const ref = useRef();
  const show = useOnScreen(ref);

  return (
    <motion.div
      ref={ref}
      animate={
        show
          ? { opacity: 1, x: 0, transition: { duration: 1 } }
          : { opacity: 0, x: 300 }
      }
    >
      {webSite ? (
        <Task>
          <TaskImage src={image} alt="img" />
          <TaskContent>
            <SubTitle>{title}</SubTitle>
            <TaskBody>{children}</TaskBody>

            <TaskLinks>
              {/* {console.log(webSite)} */}
              <OneLink href={webSite} target="_blank" rel="noreferrer">
                <i className="bi bi-globe"></i> <p>Visit Webside</p>
              </OneLink>
              <OneLink href={github} target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i> <p>See Code</p>
              </OneLink>
            </TaskLinks>
          </TaskContent>
        </Task>
      ) : (
        <AllGitHub>
          <a href={myGitHub} target="_blank" rel="noreferrer">
            <i className="bi bi-github mr-4"></i>
            {title}
          </a>
        </AllGitHub>
      )}
    </motion.div>
  );
}

const Project = tw.div`

`;
const Title = tw.h1`
text-center md:text-left text-6xl font-extrabold
`;
const Task = tw.div`
border-black border-2 flex flex-col rounded-xl overflow-hidden gap-8 md:flex-row
`;

const SubTitle = tw.div`
text-xl font-bold text-center md:text-left
`;

const TaskImage = tw.img`
w-96 max-h-96 flex-shrink-0 flex-grow-0 h-full object-cover mx-auto p-4
`;

const TaskContent = tw.div`
flex flex-col gap-8 p-4
`;

const TaskBody = tw.div`
grow
`;

const TaskLinks = tw.div`
flex flex-col mb-4  w-36  mx-auto md:mx-0
`;

const OneLink = tw.a`
flex  gap-1  mt-2 hover:underline
`;

const AllGitHub = tw.div`
h-36 border-2 border-black rounded-xl text-4xl text-center font-bold flex justify-center items-center p-2
`;
