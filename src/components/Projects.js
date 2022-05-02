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
          image="https://www.klarinsvet.si/wp-content/uploads/2019/12/airbnb-booking-seminar.png"
          github="https://github.com/LovroHodak/BookNbFront"
          githubBE="https://github.com/LovroHodak/BookNbBack"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
          code="When I started this project I was sure that I will be mostly working on BE creating a 
          scraping tool with a help of library Puppeteer. And to scrape two sites at once 
          was a real challenge. When talking about Airbnb I had to click different buttons 
          on different pages to get the results I wanted. But real magic happens on FE. 
          I have build Calender from scratch using Date object. I also digged deep into 
          useQuery hook, being able to get more results and then find data with keys. 
          This is best shown in tabs, where each tab has its own results. Build with React, Mongo DB, Express, Node"
        >
          Instead of visiting Airbnb and Booking seperately, BOOKNB allows you
          to type your destination once and get results from both websites.
          Since Airbnb has an option of choosing what kind of place you want,
          results are filtered so only offers that include entire place are
          being checked. And is that is not enough in this app you can search
          multiple destinations and get results inside of a new tab.
        </Item>
        <Item
          title="PANFU band"
          image="https://scontent-vie1-1.xx.fbcdn.net/v/t31.18172-8/17218615_1263497267036967_6785973532888712867_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=JfWvijKJIXIAX9lOUr6&_nc_ht=scontent-vie1-1.xx&oh=00_AT8jJZRPVothJI8S-5Y4LJTiy3IsfGJeA2a2ie39maZxbw&oe=62873255"
          github="https://github.com/LovroHodak/panfuFrontend"
          githubBE="https://github.com/LovroHodak/panfubackend"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
          code="When I started this project I was sure that I will be mostly working on BE creating a 
          scraping tool with a help of library Puppeteer. And to scrape two sites at once 
          was a real challenge. When talking about Airbnb I had to click different buttons 
          on different pages to get the results I wanted. But real magic happens on FE. 
          I have build Calender from scratch using Date object. I also digged deep into 
          useQuery hook, being able to get more results and then find data with keys. 
          This is best shown in tabs, where each tab has its own results. Build with React, Mongo DB, Express, Node"
        >
          Band website. Here you can listen to PANFU music, browse through
          gallerys and learn more about the band. There you can also find
          contact information and links to youtube and facebook pages. Check it
          out you might like it!
        </Item>
        <Item
          title="CurveZZZZ"
          image="https://upload.wikimedia.org/wikipedia/en/7/75/Achtung%2C_die_Kurve%21.jpg"
          github="https://github.com/LovroHodak/CurveZZZZ"
          webSite="https://lovrohodak.github.io/CurveZZZZ/"
          code="When I started this project I was sure that I will be mostly working on BE creating a 
          scraping tool with a help of library Puppeteer. And to scrape two sites at once 
          was a real challenge. When talking about Airbnb I had to click different buttons 
          on different pages to get the results I wanted. But real magic happens on FE. 
          I have build Calender from scratch using Date object. I also digged deep into 
          useQuery hook, being able to get more results and then find data with keys. 
          This is best shown in tabs, where each tab has its own results. Build with JavaScript, CSS, HTML"
        >
          My first ever project. Recreation of legendary multiplayer game
          Achtung die Kurve. In this game you try to avoid hitting yourself,
          your opponent or the wall. Call a friend and start playing! Project
          was build from stratch idea was only borrowed for inspiration.
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
          <TaskImage src={image} alt="img" />
          <TaskContent>
            <TitleAndBtn>
              <SubTitle>{title}</SubTitle>
              {content ? (
                <AboutBtn onClick={() => setContent(!content)}>
                  Aboute the code
                </AboutBtn>
              ) : (
                <AboutBtn onClick={() => setContent(!content)}>
                  About the project
                </AboutBtn>
              )}
            </TitleAndBtn>
            {content ? (
              <TaskBody>{children}</TaskBody>
            ) : (
              <TaskBody>{code}</TaskBody>
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
          <a href={myGitHub} target="_blank" rel="noreferrer">
            <i className="bi bi-github mr-4"></i>
            {title}
          </a>
        </AllGitHub>
      )}
    </motion.div>
  );
}

const TitleAndBtn = tw.div`
flex justify-between
`

const Project = tw.div`
flex flex-col gap-8
`;
const ProjectItems = tw.div`
flex flex-col gap-4 overflow-x-hidden md:overflow-x-visible
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
flex flex-col gap-4 p-4
`;

const TaskBody = tw.div`
grow
`;

const TaskLinks = tw.div`
flex flex-col mb-4  w-36  mx-auto md:mx-0
`;

const OneLink = tw.a`
flex  gap-1  mt-2 hover:underline w-full
`;

const AllGitHub = tw.div`
h-36 border-2 border-black rounded-xl text-4xl text-center font-bold flex justify-center items-center p-2
`;

const AboutBtn = tw.button`
border-2 border-black px-2 cursor-pointer hover:bg-slate-300 bg-yellow-300
`;
