import React, { useState } from "react";
import { tw } from "../tailwind";

export default function IntroMore() {
  const [show, setShow] = useState("hidden");
  return (
    <IntroMoreContainer>
      <About>
        I am a graduated Philosopher, born and raised in Ljubljana, Slovenia.
        Currently majoring in its most lucrative branch: coding. Not long after
        I finished my bachelor's I moved to Berlin where I stayed for almost 4
        years. I decided to do so since I was always intent to explore the
        concept of diversity and figured Berlin would be a perfect place to
        start.
      </About>
      <ShowMoreLessBtn
        className={`${show === "block" ? "hidden" : ""} md:hidden cursor-pointer hover:bg-red-500`}
        onClick={() => {
          setShow("block");
        }}
      >
        Read more
      </ShowMoreLessBtn>
      <About className={`${show} md:block`}>
        Even though Berlin was great, I enjoyed coming back to my hometown
        regularly. Unfortunately, due to the pandemic I couldn't visit Ljubljana
        frequently enough so I decided to simply move back.
      </About>
      <About className={`${show} md:block`}>
        As you might have figured out already, having a bachelor's degree in
        Philosophy did not make me the “most wanted” on the job market. This
        meant that I had to have tried a variety of different jobs. I have
        worked in administration, hospitality, sales, logistics, event
        organization, you name it!
      </About>
      <About className={`${show} md:block`}>
        Throughout my employment, I have worked alone, in big groups,
        international teams, and had multilingual work environments where I
        could brush up on my English, German, Slovene and Serbo-Croatian.
      </About>
      <About className={`${show} md:block`}>
        I enjoy working in big teams but also value my privacy. I am a firm
        believer that honesty and having willingness to see the good in other
        people are key to working well with others.
      </About>
      <About className={`${show} md:block`}>
        If I had to categorize myself, I would say I am a results-driven person
        given the fact that I like the way accomplishing things makes me feel,
        all warm and fuzzy. However, I never try to overdo it, always being
        aware that at the end of the day I am just human surrounded with other
        human beings.
      </About>
      <About className={`${show} md:block`}>
        Now finally, coming to the point of why I made this website and why you
        are here, hopefully : I make FREE websites! Just kidding, here is the
        rest of my story.
      </About>
      <ShowMoreLessBtn
        className={`${show === "block" ? "!hidden" : ""} hidden md:block cursor-pointer hover:bg-red-500`}
        onClick={() => {
          setShow("block");
        }}
      >
        Read more
      </ShowMoreLessBtn>
      <About className={show}>
        While trying different career paths and dance moves in Berlin, I
        stumbled upon JavaScript. It started great with HTML and CSS. Everything
        made sense to me and I couldn't realize what everyone was complaining
        about. And then came JavaScript.
      </About>
      <About className={show}>
        It was at this point that my flight or fight kicked in (at least I think
        it was that, or just my third cup of coffee made me feel things).
        Fortunately, I stuck with it and after I got my first Counter running,
        the whole new world of JavaScript was there for me to uncover.
      </About>
      <About className={show}>
        Then summer came, so many paths to bike, hoops to shoot and so many
        opportunities to play “Wonderwall” at a campfire to impress my friends.
        So, I started running out of time. However, I made a promise to myself
        that no matter how little free time I will have I will invest it into
        programming.
      </About>
      <About className={show}>
        When I moved back to Slovenia I took 3 months off to attend Full-stack
        web-dev Bootstrap. So far this was a great decision because there I
        learned about server side programming with Node, how to interact with
        databases (Mongo) and I also learned about the front-end library called
        React.
      </About>
      <About className={show}>
        Things started to come together, but the more knowledge I possessed the
        more questions I had. At this point I knew my years studying philosophy
        should come in handy. It had taught me that this meant I was up to
        something and I should not let it go.
      </About>
      <About className={show}>
        So I found myself a job in Slovenia to sustain all my cool hobbies but I
        also found myself a coding mentor to guide me on my programming path.
        Shout out to Klemen!
      </About>
      <About className={show}>
        I wanted to wait long enough to feel comfortable about my coding skills
        before I start applying for jobs. If you are reading this, that means
        the time has come.
      </About>
      <About className={show}>
        As the great philosopher, Peter Parker/ Spiderman once said: "Not
        everyone is meant to make a difference. But for me, the choice to lead
        an ordinary life is no longer an option." I would be thrilled to have
        you join my journey. I can promise a hard worker, an expert on all
        things philosophy and someone who by now knows a thing or two about
        coding.
      </About>
      <ShowMoreLessBtn
        className={`${show} cursor-pointer hover:bg-red-500`}
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
md:text-lg font-mono flex flex-col
`;
const About = tw.span`
font-mono my-2
`;
const ShowMoreLessBtn = tw.span`
w-24 text-center bg-red-800 
`;
