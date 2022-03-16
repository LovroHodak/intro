import React, {  useRef } from "react";
import { tw } from "../tailwind";
import { motion } from "framer-motion";
import { useOnScreen } from "./use-on-screen";

export default function Projects() {


  return (
    <Project className="flex flex-col gap-8">
      <Title>Latest projects</Title>
      <div className="flex flex-col gap-4">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </Project>
  );
}

function Item() {
  const ref = useRef();
  const show = useOnScreen(ref);
  console.log(ref.current?.offsetTop)

  return (
    <motion.div
      ref={ref}
      animate={!show ? { opacity: 0, x: 600 } : { opacity: 1, x: 0, transition:{duration: 1} }}
    >
      <Task>
        <SubTitle>New job who dis</SubTitle>
        <div>
          By default, the auto-placement algorithm looks linearly through the
          grid without backtracking; if it has to skip some empty spaces to
          place
        </div>
      </Task>
    </motion.div>
  );
}

const Project = tw.div`
border-2
`;
const Title = tw.h1`
text-2xl font-extrabold
`;
const Task = tw.div`
border-black border-2 py-20
`;

const SubTitle = tw.div`
text-xl font-bold 
`;
