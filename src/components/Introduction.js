import React from "react";
import { tw } from "../tailwind";
import lovroFoto from "../lovro.png";

export function Introduction() {
  return (
    <Intro>
      <div className="order-3 md:order-1 mt-32">
        <Title>Hello I'm Lovro Hodak 👋</Title>
        <Subtitle>
          I’m a developer based in Slovenia.
        </Subtitle>
        <Social>
          
          <SocialLink>GH</SocialLink>
          <SocialLink href='https://www.linkedin.com/in/lovrohodak/' target='_blank'>LI</SocialLink>
          <SocialLink>GM</SocialLink>
        </Social>
      </div>

      <ImageDiv className='order-2'>
        
        <Image src={lovroFoto} alt="img" />
      </ImageDiv>
    </Intro>
  );
}

const Intro = tw.div`
grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]  
`;

const Title = tw.h1`
font-thin text-8xl mb-8
`
const Subtitle = tw.div`
text-2xl mb-4
`
const Social = tw.div`
flex gap-4 text-2xl font-medium 
`
const SocialLink = tw.a`
hover:underline cursor-pointer
`;
const ImageDiv = tw.div`
 overflow-hidden self-center flex justify-center
`;

const Image = tw.img`
w-60 h-60 md:w-[30vw] md:h-[30vw] max-w-[330px] max-h-[330px] rounded-full object-cover border-dashed border-8 border-black 
`
