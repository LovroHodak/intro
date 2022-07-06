import React from "react";
import { tw } from "../tailwind";
import lovroFoto from "../lcv2-tra.png";


export function Introduction() {
  return (
    <Intro>
      <TitleAndBasic>
        <Title>Hello I'm Lovro Hodak 👋,</Title>
        <Subtitle>fullstack (MERN) web-developer based in Slovenia.</Subtitle>
        <Social>
          <SocialLink href="https://github.com/LovroHodak" target="_blank">
            GH
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/lovrohodak/"
            target="_blank"
          >
            LI
          </SocialLink>
          <SocialLink target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hodak.lovro@gmail.com">GM</SocialLink>
        </Social>
      </TitleAndBasic>

      <ImageDiv className="order-2">
        <Image src={lovroFoto} alt="img" />
      </ImageDiv>
    </Intro>
  );
}

const Intro = tw.div`
grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]  
`;
const TitleAndBasic = tw.div`
order-3 md:order-1 mt-16 md:mt-32
`;
const Title = tw.h1`
text-center md:text-left md:font-thin text-4xl md:text-8xl mb-8
`;
const Subtitle = tw.div`
text-2xl mb-4 text-center md:text-left
`;
const Social = tw.div`
flex gap-4 text-2xl font-medium justify-center md:justify-start
`;
const SocialLink = tw.a`
hover:underline cursor-pointer
`;
const ImageDiv = tw.div`
 overflow-hidden self-center flex justify-center
`;

const Image = tw.img`
w-60 h-60 md:w-[30vw] md:h-[30vw] max-w-[330px] max-h-[330px] rounded-full object-cover border-dashed border-8 border-black 
`;
