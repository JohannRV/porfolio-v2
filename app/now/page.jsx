import React from "react";
import Sidebar from "../components/Sidebar";

const page = () => {
  return (
    <div className="bg-dark min-h-screen mx-auto flex">
      <nav>
        <Sidebar />
      </nav>
      <div className="flex-col items-center mx-auto">
        <section className="px-28 leading-6">
          <h1 className="text-text_primary text-4xl font-semibold m-0 pt-5">
            Now
          </h1>
          <p className="text-text_secondary pb-4">About me now</p>
          <p className="text-text_primary">
            In this section, I will tell you what I am currently doing
          </p>
          <p className="text-text_primary py-2">
            I decided to take a short break from programming due to burnout and
            personal issues
          </p>
          <p className="text-text_primary py-2">
            At the moment, I have enrolled in the university to pursue a diploma
            in Information Technology, which will help me improve my technical
            and soft skills
          </p>
          <p className="text-text_primary py-2">
            My goal before the end of 2023 is to secure a job as a software
            developer and continue my studies to eventually pursue a degree in
            engineering
          </p>
          <p className="text-text_primary py-2">
            So, for now, I work in a mini supermarket and study. I hope to find
            a job either in my country, Costa Rica, or anywhere else.
          </p>
          <p className="text-text_primary py-2">
            Thank you for coming this far; I hope you have found what you were
            looking for
          </p>
          <p className="text-text_primary py-2">
            Have a nice day, afternoon, or evening! :)
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
