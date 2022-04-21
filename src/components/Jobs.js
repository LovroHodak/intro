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
          image="https://logodix.com/logo/1186433.png"
          company="Amazon Logistics"
          type="Logistics"
          year="(2017 - 2020)"
          place="Berlin, Germany"
        />
        <Job
          image="https://pbs.twimg.com/profile_images/1127876464186142721/ksepSQ_q_400x400.png"
          company="Iustitia doo"
          type="Sales"
          year="(2014-2016)"
          place="Ljubljana, Slovenia"
        />
        <Job
          image="data:image/png;base64,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"
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
