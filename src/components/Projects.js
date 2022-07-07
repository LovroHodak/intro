import React, { useRef, forwardRef, useState } from "react";
import { tw } from "../tailwind";
import { motion } from "framer-motion";
import { useOnScreen } from "../hooks/use-on-screen";



export default forwardRef(function Projects(_, ref) {
  //console.log(ref);

  return (
    <Project>
      <Title ref={ref}>Projects</Title>
      <ProjectItems>
        <Item
          title="BookNB"
          image="/BookNBGood11.gif"
          github="https://github.com/LovroHodak/BookNbFront"
          githubBE="https://github.com/LovroHodak/BookNbBack"
          webSite="https://booknb.netlify.app/"
          code={
            <CodeDiv className="text-sm lg:text-base">
              <StrongHighlighted>Front-end</StrongHighlighted> was written with
              the <StrongHighlighted>React</StrongHighlighted> library where I
              have used the
              <StrongHighlighted> Tailwind</StrongHighlighted> library for
              styling. I fetched data from the backend with
              <StrongHighlighted> useQuery hook</StrongHighlighted>. Here, I got
              my first glimpse of using the
              <StrongHighlighted> useMemo </StrongHighlighted>
              hook, since I needed returned value before the first render. The
              calendar was built from scratch with a
              <StrongHighlighted> Date object</StrongHighlighted>. The{" "}
              <StrongHighlighted>Back-end </StrongHighlighted>
              is written in <StrongHighlighted>Node.js</StrongHighlighted> where
              I first set up an{" "}
              <StrongHighlighted>Express server</StrongHighlighted>. For the
              library I used <StrongHighlighted>Puppeteer</StrongHighlighted>{" "}
              which helps me scrape data. What Puppeteer does is that it fires
              up a <StrongHighlighted>Cromium</StrongHighlighted> where I can
              then click and type into websites and gather data which is
              returned to me.
            </CodeDiv>
          }
        >
          Wouldn’t it be great to combine your vacation rental options into one
          app? Instead of visiting Airbnb and Booking separately, BOOKNB allows
          you to type your destination once and gets you results from both
          websites. Since Airbnb has an option of choosing what kind of place
          you want to stay in, the results were filtered so that only offers
          that include the entire place are being presented. And If that is not
          enough, with the Booknb app you can also search multiple destinations
          and get the results inside of a new tab.
        </Item>
        <Item
          title="PANFU band"
          image="/panfuGood11.gif"
          github="https://github.com/LovroHodak/panfuFrontend"
          githubBE="https://github.com/LovroHodak/panfubackend"
          webSite="https://panfuband.netlify.app/"
          code={
            <CodeDiv>
              The <StrongHighlighted>Back-end</StrongHighlighted> was written in{" "}
              <StrongHighlighted>Node.js</StrongHighlighted> where I set up a
              server with
              <StrongHighlighted> Express</StrongHighlighted>. I have also used
              the{" "}
              <StrongHighlighted>connect-multiparty library</StrongHighlighted>{" "}
              which works with different data types. Since I decided to stream
              data I interacted with{" "}
              <StrongHighlighted>MONGODB</StrongHighlighted> through{" "}
              <StrongHighlighted>GridFSBucket</StrongHighlighted>. While the{" "}
              <StrongHighlighted>Front-end </StrongHighlighted>
              is built in <StrongHighlighted>React</StrongHighlighted>, where I
              dived deeper into{" "}
              <StrongHighlighted>
                useEffect and useQuery hooks (useMutation)
              </StrongHighlighted>
              . I styled this page with a touch of <StrongHighlighted>
                 Bootstrap and Styled components
              </StrongHighlighted>
              .
            </CodeDiv>
          }
        >
          Band website! Here you can listen to PANFU music, browse through our
          galleries and learn more about the band. You can also find their
          contact information and links to youtube and facebook pages. Check it
          out, you might like it!
        </Item>
        <Item
          title="CurveZZZZ"
          image="/CurvezzzGood1.gif"
          github="https://github.com/LovroHodak/CurveZZZZ"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
          code={
            <CodeDiv>
              In this project I use{" "}
              <StrongHighlighted>
                HTML, CSS and vanilla JavaScript
              </StrongHighlighted>
              . For purpose of drawing graphics I have used{" "}
              <StrongHighlighted>HTML Canvas element</StrongHighlighted>. In
              this project I got familiar with using{" "}
              <StrongHighlighted>event listeners</StrongHighlighted>, but real
              challenge arose when I had to dig back to highscholl mathemathics
              remembering how sinus and cosinus work so I was able to move lines
              in unlinear ways.
            </CodeDiv>
          }
        >
          Est Voil here it is, my first project ever. There were many projects
          after this one, but as they say: you never forget your first one. It
          is a recreation of the legendary multiplayer game “Achtung die Kurve”.
          The objective of the game is to try to avoid hitting yourself, your
          opponent or the wall. Call a friend and start playing! The website was
          built from scratch and the idea was only borrowed for inspiration.
        </Item>
        <Item
          myGitHub="https://github.com/LovroHodak"
          title="See more on Github"
        />
      </ProjectItems>
    </Project>
  );
});

/* top i am sending props to Item */
function Item({
  title,
  image,
  github,
  githubBE,
  webSite,
  myGitHub,
  children,
  code,
}) {
  const ref = useRef();
  const show = useOnScreen(ref);
  const [content, setContent] = useState(true);

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
          <YellowSqrTask />
          <BlackSqrTask />
          <TaskImageWrapper>
            <TaskImage src={image} alt="img" />
          </TaskImageWrapper>
          <TaskContent>
            <TitleAndBtn>
              <SubTitle>{title}</SubTitle>

              <BtnWrapper>
                <AboutBtn onClick={() => setContent(!content)}>
                  {content ? "About the code" : "About the project"}
                </AboutBtn>
              </BtnWrapper>
            </TitleAndBtn>
            {content ? (
              <TaskBody>{children}</TaskBody>
            ) : (
              <TaskBodyCode>{code}</TaskBodyCode>
            )}

            <TaskLinks>
              {content ? (
                <OneLink href={webSite} target="_blank" rel="noreferrer">
                  <i className="bi bi-globe"></i> <p>Visit Webside</p>
                </OneLink>
              ) : (
                <>
                  {github && !githubBE && (
                    <OneLink href={github} target="_blank" rel="noreferrer">
                      <i className="bi bi-github"></i> <p>See Code</p>
                    </OneLink>
                  )}
                  {githubBE && (
                    <>
                      <OneLink href={github} target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i> <p>See Code FE</p>
                      </OneLink>
                      <OneLink href={githubBE} target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i> <p>See Code BE</p>
                      </OneLink>
                    </>
                  )}
                </>
              )}
              {/* {console.log(webSite)} */}
            </TaskLinks>
          </TaskContent>
        </Task>
      ) : (
        <AllGitHub>
          <YellowSqrGit />
          <BlackSqrGit />
          <a
            href={myGitHub}
            target="_blank"
            rel="noreferrer"
            className="absolute"
          >
            <i className="bi bi-github mr-4"></i>
            {title}
          </a>
          
        </AllGitHub>
      )}
    </motion.div>
  );
}

// style
const TitleAndBtn = tw.div`
flex flex-col smaller:flex-row items-center justify-between
`;

const Project = tw.div`
flex flex-col gap-8
`;
const ProjectItems = tw.div`
flex flex-col gap-4 overflow-x-hidden medium:overflow-x-visible
`;
const Title = tw.h1`
text-center md:text-left text-6xl font-extrabold
`;
const Task = tw.div`
mr-2 relative flex medium:gap-8 flex-col medium:flex-row medium:h-96 
`;

const SubTitle = tw.div`
text-3xl font-bold text-center mb-4 md:text-left
`;

const TaskImageWrapper = tw.div`
medium:w-96 flex-shrink-0 flex-grow-0 medium:relative h-full  p-4 flex items-center justify-center cursor-pointer z-30
`;

/* const TaskImage = tw.video`
max-w-full max-h-full medium:hover:scale-200 medium:transition-transform medium:origin-[center_left] cursor-zoom-in
`; */

const TaskImage = tw.img`
max-w-full max-h-full medium:hover:scale-200 medium:transition-transform medium:origin-[center_left] cursor-zoom-in
`;

const TaskContent = tw.div`
flex flex-col gap-4 pt-0 pb-4 pl-4 pr-4 md:p-4 z-20
`;

const TaskBody = tw.div`
grow
`;

const TaskBodyCode = tw.code`
grow
`;

const TaskLinks = tw.div`
flex big:flex-col mb-4 mx-0
`;

const OneLink = tw.a`
flex  gap-1  mt-2 hover:underline w-full
`;

const AllGitHub = tw.div`
mr-2 mb-2 relative h-36  text-4xl text-center font-bold flex justify-center items-center p-2
`;

const AboutBtn = tw.span`
block py-2 px-2 rounded-lg text-base bg-blue-500 text-white -translate-y-1 active:-translate-y-[2px] hover:bg-blue-600 transition-all
`;

const BtnWrapper = tw.button`
bg-blue-900 rounded-lg border-none p-0 cursor-pointer outline-offset-4 w-40
`;

const CodeDiv = tw.div`
text-sm lg:text-base
`;

const StrongHighlighted = tw.strong`
drop-shadow-[0_0_3px_red]
`;

const YellowSqrTask = tw.div`
bg-amber-200 absolute top-2 left-2 w-full h-full rounded-xl z-10
`;
const YellowSqrGit = tw.div`
bg-amber-200 absolute top-2 left-2 w-full h-full rounded-xl
`;

const BlackSqrTask = tw.div`
absolute w-full h-full border-2 border-black rounded-xl z-20
`;

const BlackSqrGit = tw.div`
absolute w-full h-full border-2 border-black rounded-xl
`;
