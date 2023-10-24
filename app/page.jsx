"use client";
import React from "react";
import TechStack from "./components/TechStack";
import Sidebar from "./components/Sidebar";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-dark min-h-full">
      <nav>
        <Sidebar />
      </nav>
      <header className="flex-col px-9 py-10 md:px-24 ">
        <main className="text-text_primary text-justify m-10 lg:px-0 lg:py-0">
          <h1 className="text-3xl font-semibold">
            Hi, i am Johan Román Vargas
          </h1>
          <h1 className="text-3xl font-semibold">
            Front End Developer on the way to being fullstack
          </h1>
          <h1 className="text-3xl font-semibold">based in Costa Rica</h1>
          <p className="text-text_secondary font-extralight text-xl py-3">
            I build different websites trying my best and always learning. I
            have very nice websites because of the effort i put into my
            projects.
          </p>
          <p className="text-text_secondary font-extralight text-xl py-3">
            I keep learning about different technologies, i like learning new
            things every day, i also love building projects from scratch.
          </p>
          <p className="text-text_secondary font-extralight text-xl py-1">
            I hope to be the person you are looking for
          </p>
          <div>
            <p className="text-text_secondary font-extralight text-xl py-1">
              You can contact me via:{" "}
            </p>
            <a
              className="text-text_secondary font-extralight text-xl underline hover:bg-text_primary hover:text-tooltip"
              href="mailto:johnrv.developer@gmail.com">
              E-mail
            </a>{" "}
            or{" "}
            <a
              className="text-text_secondary font-extralight text-lg underline hover:bg-text_primary hover:text-tooltip"
              href="https://www.linkedin.com/in/johanromanvargas">
              LinkedIn
            </a>
          </div>
        </main>
        <section className="py-5 px-32 ">
          <TechStack />
        </section>
      </header>
    </div>
  );
};

export default HomePage;
