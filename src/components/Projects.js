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
          /* image="https://www.klarinsvet.si/wp-content/uploads/2019/12/airbnb-booking-seminar.png"
           */
          image="/BookNBGood.gif"
          github="https://github.com/LovroHodak/BookNbFront"
          githubBE="https://github.com/LovroHodak/BookNbBack"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
          code={
            <div className="text-sm lg:text-base">
              <strong className="drop-shadow-[0_0_3px_red]">Front-end</strong>{" "}
              writen with library{" "}
              <strong className="drop-shadow-[0_0_3px_red]">React</strong> where
              I have used{" "}
              <strong className="drop-shadow-[0_0_3px_red]">Tailwind</strong> library for styling. I fetch data from backend with{" "}
              <strong className="drop-shadow-[0_0_3px_red]">
                useQuery hook
              </strong>
              . I got my first glimpse of using{" "}
              <strong className="drop-shadow-[0_0_3px_red]">
                useMemo hook
              </strong>
              , since I needed returned value before first render.{" "}
              <strong className="drop-shadow-[0_0_3px_red]">Calendar</strong> is
              build from strach with{" "}
              <strong className="drop-shadow-[0_0_3px_red]">Date object</strong>
              . <strong className="drop-shadow-[0_0_3px_red]">Back-end</strong> is writen in{" "}
              <strong className="drop-shadow-[0_0_3px_red]">
                Node.js
              </strong>{" "}
              where I first set up an{" "}
              <strong className="drop-shadow-[0_0_3px_red]">Express</strong> server. Then I use library{" "}
              <strong className="drop-shadow-[0_0_3px_red]">Puppeteer</strong> that helps me scrape data. What Puppeteer does is that it fires up
              a <strong className="drop-shadow-[0_0_3px_red]">Cromium</strong> where I can than click and type into websites and gather data
              which is than returned to me.
           </div>
          }
        >
          Instead of visiting Airbnb and Booking seperately, BOOKNB allows you
          to type your destination once and get results from both websites.
          Since Airbnb has an option of choosing what kind of place you want to
          stay in, results are filtered so only offers that include entire place
          are being checked. And if that is not enough in this app you can
          search multiple destinations and get results inside of a new tab.
        </Item>
        <Item
          title="PANFU band"
          image="/panfuGood.gif"
          github="https://github.com/LovroHodak/panfuFrontend"
          githubBE="https://github.com/LovroHodak/panfubackend"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
          code={
            <div className="text-sm lg:text-base">
              <strong className="drop-shadow-[0_0_3px_red]">Back-end</strong> is writen in <strong className="drop-shadow-[0_0_3px_red]">Node.js</strong> where i set up a server with <strong className="drop-shadow-[0_0_3px_red]">Express</strong>.{" "}
              
                I have also used
                <strong className="drop-shadow-[0_0_3px_red]"> connect-multiparty</strong> library which works with different data types.
              Since I decided to stream data I interected with <strong className="drop-shadow-[0_0_3px_red]">MONGODB</strong> through <strong className="drop-shadow-[0_0_3px_red]">GridFSBucket</strong>. <strong className="drop-shadow-[0_0_3px_red]">Front-end</strong> is built in <strong className="drop-shadow-[0_0_3px_red]">React</strong>, where i dived deeper into <strong className="drop-shadow-[0_0_3px_red]">useEffect and useQuery hooks (useMutation)</strong>. I styled this page
              with a touch of <strong className="drop-shadow-[0_0_3px_red]">Bootstrap</strong> and <strong className="drop-shadow-[0_0_3px_red]">Styled components</strong>.{" "}
            </div>
          }
        >
          Band website. Here you can listen to PANFU music, browse through
          gallerys and learn more about the band. You can also find contact
          information and links to youtube and facebook pages. Check it out you
          might like it!
        </Item>
        <Item
          title="CurveZZZZ"
          /* image="https://upload.wikimedia.org/wikipedia/en/7/75/Achtung%2C_die_Kurve%21.jpg" */
          image="/CurvezzzGood.gif"
          github="https://github.com/LovroHodak/CurveZZZZ"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
          code={
            <div className="text-sm lg:text-base">
              In this project I use <strong className="drop-shadow-[0_0_3px_red]">HTML, CSS and vanilla JavaScript</strong>. For
              purpose of drawing graphics I have used <strong className="drop-shadow-[0_0_3px_red]">HTML Canvas element</strong>. In
              this project I got familiar with using <strong className="drop-shadow-[0_0_3px_red]">event listeners</strong>, but real
              challenge arose when I had to dig back to highscholl mathemathics
              remembering how sinus and cosinus work so I was able to move lines
              in unlinear ways.
            </div>
          }
        >
          My first ever project. There were many projects I have build
          afterwards, but like they say you never forget your first one, so I
          just had to include it on this page. Recreation of legendary
          multiplayer game Achtung die Kurve. In this game you try to avoid
          hitting yourself, your opponent or the wall. Call a friend and start
          playing! Project was build from stratch and idea was only borrowed for
          inspiration.
        </Item>
        <Item
          myGitHub="https://github.com/LovroHodak"
          title="See more on Github"
        />
      </ProjectItems>
    </Project>
  );
});

/* upstairs i am sending props to Item */
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
          <div className="bg-amber-200 absolute top-2 left-2 w-full h-full rounded-xl z-10"></div>
          <div className="absolute w-full h-full border-2 border-black rounded-xl z-20"></div>
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
          <div className="bg-amber-200 absolute top-2 left-2 w-full h-full rounded-xl"></div>
          <a
            href={myGitHub}
            target="_blank"
            rel="noreferrer"
            className="absolute"
          >
            <i className="bi bi-github mr-4"></i>
            {title}
          </a>
          <div className="absolute w-full h-full border-2 border-black rounded-xl"></div>
        </AllGitHub>
      )}
    </motion.div>
  );
}

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
