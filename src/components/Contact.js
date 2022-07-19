import React, { forwardRef } from "react";
import { tw } from "../tailwind";
import "./contact.css";


export default forwardRef(function Contact(_, ref) {
  //console.log(ref);
  return (
    <div>
      <Title ref={ref}>Get in touch</Title>
      <WorkTogether>
        <SmallerTitle>
          Want to work together or have any questions?
        </SmallerTitle>
        <Social>
          <SocialLink
            href="https://www.linkedin.com/in/lovrohodak/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </SocialLink>
          <SocialLink
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hodak.lovro@gmail.com"
          >
            <i className="bi bi-envelope"></i>
          </SocialLink>
        </Social>
      </WorkTogether>

      <Resume id="cv" href='/CVHodakLovro.pdf' target='_blank'>
        <h1>CV</h1>
        <i className="bi bi-download"></i>
      </Resume>
    </div>
  );
});

const Title = tw.h1`
text-center md:text-left text-6xl font-extrabold mb-8
`;

const SmallerTitle = tw.h2`
text-2xl font-bold p-1 text-center mb-4
`;

const WorkTogether = tw.div`
border-2 border-black rounded-2xl w-[80%] md:w-[60%] mx-auto flex flex-col items-center p-4
`;

const Social = tw.div`
flex gap-8 text-4xl p-2
`;

const SocialLink = tw.a`
hover:opacity-50 cursor-pointer
`;

const Resume = tw.a`
text-8xl border-2 border-black rounded-full flex flex-col w-56 h-56 justify-center items-center overflow-hidden mx-auto my-10 hover:opacity-50 cursor-pointer
`;
