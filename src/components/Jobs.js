import React, { forwardRef } from "react";
import { tw } from "../tailwind";

export default forwardRef(function Jobs(_, ref) {
  return (
    <div>
      <Title ref={ref}>Jobs</Title>
      <AllJobs>
        <Job
          image="https://cdn.worldvectorlogo.com/logos/novartis-1.svg"
          company="Novartis"
          type="Pharmacy"
          year="(2021 - current)"
          place="Menges, Slovenia"
        />
        <Job
          image="https://cdn.worldvectorlogo.com/logos/novartis-1.svg"
          company="Amazon Logistics"
          type="Logistics"
          year="(2017 - 2020)"
          place="Berlin, Germany"
        />
        <Job
          image="https://cdn.worldvectorlogo.com/logos/novartis-1.svg"
          company="Iustitia doo"
          type="Sales"
          year="(2014-2016)"
          place="Ljubljana, Slovenia"
        />
        <Job
          image="https://cdn.worldvectorlogo.com/logos/novartis-1.svg"
          company="Direkt4in doo"
          type="Hospitality"
          year="(2011 - 2014)"
          place="Ljubljana, Slovenia"
        />
      </AllJobs>
    </div>
  );
});

function Job({ image, company, type, year, place }) {
  return (
    <div>
      <Image src={image} alt="img" />
      <Company>{company}</Company>
      <Type>{type}</Type>
      <Year>{year}</Year>
      <Place>{place}</Place>
    </div>
  );
}

const Title = tw.h1`
text-center md:text-left text-6xl font-extrabold mb-8
`;
const AllJobs = tw.div`
flex gap-2 flex-wrap justify-center
`;
const Image = tw.img`
w-[282px] h-[282px]
`;
const Company = tw.h1`
text-2xl font-bold text-center p-1
`;
const Type = tw.h1`
text-xl text-center p-1
`;
const Year = tw.h1`
text-xl text-center p-1
`;
const Place = tw.h1`
text-center p-1
`;
