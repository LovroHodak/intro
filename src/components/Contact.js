import React from "react";
import { tw } from "../tailwind";
import "./contact.css";

export default function Contact() {
  return (
    <div className="">
      <h1 className="text-center md:text-left text-6xl font-extrabold mb-8">
        Get in touch
      </h1>
      <div className="border-2 border-black rounded-2xl w-[60%] mx-auto flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold p-1 text-center mb-4">
          Want to work together or have any questions?
        </h2>
        <Social>
          <SocialLink
            href="https://www.linkedin.com/in/lovrohodak/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </SocialLink>
          <SocialLink>
            <i className="bi bi-envelope"></i>
          </SocialLink>
        </Social>
      </div>
      <Resume
        id="cv"
        className="border-2 border-black rounded-full flex flex-col w-56 h-56 justify-center items-center overflow-hidden mx-auto my-10 hover:opacity-50 cursor-pointer"
      >
        <h1 className="text-8xl">CV</h1>
        <i className="bi bi-download text-8xl"></i>
      </Resume>
    </div>
  );
}

const Social = tw.div`
flex gap-8 text-4xl p-2
`;

const SocialLink = tw.a`
hover:opacity-50 cursor-pointer
`;

const Resume = tw.div`

animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
`;
