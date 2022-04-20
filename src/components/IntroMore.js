import React, { useState } from "react";

export default function IntroMore() {
  const [show, setShow] = useState("hidden");
  return (
    <div className="md:text-lg font-mono">
      <span>
        Talk about TECHNOLOGIES I use. My EDUCATION. My PAST EXPERIENCE in
        LIFE(Berlin) and WORK. How I STARTED PROGRAMING and WHY I CODE. My
        HOBBIES (sport, music) I started programming out of pure curiosity
        around two years ago while I was still living in Berlin.{" "}
      </span>
      <span
        className={`w-24 text-center bg-red-800 ${
          show === "block" ? "hidden" : ""
        } md:hidden`}
        onClick={() => {
          setShow("block");
        }}
      >
        Read more
      </span>
      <span className={`${show} md:block `}>
        I started joining JS Meetups and after some time learning about HTML and
        CSS my first website was made. But JavaScript remained magic to me.
        First steps were hard. But soon after getting my first Counter set up I
        saw a potential and a decision was made that I want to do this for the
        rest of my life.{" "}
        <span>
          Step by step I learned about React, started looking into backend and
          servers so I got familiar with Node and Express. Mongo just came
          naturally as suggested by the internet. I don't really have any
          preferences around working front or back-end though I feel most
          comfortable using React. In my free time I am a huge sports enthusiast
          (basketball, bike, badminton...) and a big time music lover. I like to
          listen to music, but I also play bass, guitar and have just started
          learning piano.{" "}
        </span>
      </span>
      <span
        className={`w-24 text-center bg-red-800 ${show} md:hidden`}
        onClick={() => {
          setShow("hidden");
        }}
      >
        Read less
      </span>
    </div>
  );
}
