import React, { useState } from "react";
import { tw } from "../tailwind";

export default function IntroMore() {
  const [show, setShow] = useState("hidden");
  return (
    <IntroMoreContainer>
      <About>
        I was born and raised in Ljubljana where I have finished gymnasium
        Ledina and got my bachelors degree in Philosophy. Not long after I
        finished my studies I moved to Berlin where I have stayed for almost 4
        years. Living abroad meant the world to me because I wanted to
        experience the diversity of the world that we live in and Berlin is
        probably one of the most diverse cities in Europe. But Corona came and I
        couldn't visit Ljubljana frequently enough so I decided to move back.
      </About>
      <ShowMoreLessBtn
        className={show === "block" ? "hidden" : ""}
        onClick={() => {
          setShow("block");
        }}
      >
        Read more
      </ShowMoreLessBtn>
      <About className={show}>
        Having a bachelor's degree in Philosophy means that I have tried a
        variety of different jobs. I have worked in administration, hospitality,
        sales, logistios, organization of events... I have worked alone and I
        have worked in big groups. I have worked in international teams where
        the spoken languages were English and German, as well as in Slovenian or
        Serbo-Croatian teams. I enjoy working in big teams but as well I value
        my privacy. I believe the key to working in big teams are honesty and
        willingness to see the good in other people. Being good at what you do
        makes you feel better about yourself so I am definitely a results-driven
        person but with constant awareness that at the end of the day I am just
        human surrounded with other human beings.
      </About>
      <About className={show}>
        While trying different career paths I stumbled upon JavaScript meetup in
        Berlin. I was always curious about how programming works so I started to
        visit this meetup every week. It started great with HTML and CSS
        everything made sense to me and I couldn't realize what all the fuzz was
        about. And then came JavaScript. I knew I had to fly or fight.
        Fortunately I stuck with it and after I got my first Counter running the
        whole new world of JavaScript was there for me to uncover. But life
        happened, so many things to do and so little time. So I made a promise
        to myself that no matter how little free time I will have I will invest
        it into programming.
      </About>
      <About className={show}>
        So when I moved back to Slovenia I took 3 months off to attend
        Full-stack web-dev Bootstrap. Knowing only about the front-end so far
        this was a great decision because there I learned about server side
        programming with Node, how to interact with databases (Mongo) and I also
        learned about the front-end library called React. Things started to come
        together, but the more knowledge I possessed the more questions arose. I
        knew I was up to something and I didnt mean to let it go. So I found
        myself a job in Slovenia but I also found myself a coding mentor to
        guide me on my programming path. I wanted to wait long enough to feel
        comfortable about my coding skills before I start applying for jobs. If
        you are reading this, that means the time has come. 
      </About>
      <About className={show}>
      When I don't work or
        code I either do sports (big time sport enthusiast - basketball, bike,
        badminton,...) or music (even bigger music enthusiast - i enjoy
        listening, creating, playing, writing...). Or... I sit on my couch
        thinking about life and all the answers that philosophy promised to
        deliver but haven't yet lived up to its promise.
      </About>
      <ShowMoreLessBtn
        className={show}
        onClick={() => {
          setShow("hidden");
        }}
      >
        Read less
      </ShowMoreLessBtn>
    </IntroMoreContainer>
  );
}

const IntroMoreContainer = tw.div`
md:text-lg font-mono
`;
const About = tw.span`
font-mono
`;
const ShowMoreLessBtn = tw.span`
w-24 text-center bg-red-800 
`;
