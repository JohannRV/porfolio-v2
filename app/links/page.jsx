import React from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const page = () => {
  return (
    <main className="bg-dark min-h-screen md:p-11 ">
      <nav>
        <Sidebar />
      </nav>
      <section className="flex flex-col w-full">
        <h1 className="text-text_primary text-4xl font-semibold pl-32">
          Links
        </h1>
        <div className="items-center mx-20 md:px-36">
          <div className="bg-tooltip2 rounded-lg shadow-xl p-4 flex justify-between gap-2">
            <div className="flex flex-col w-full gap-10 md:gap-2">
              <Link href="https://www.linkedin.com/in/johanromanvargas/">
                <div className="flex justify-between items-center rounded-lg bg-tooltip cursor-pointer hover:-translate-y-1 p-8 md:p-0">
                  <p className="text-text_primary m-0 text-sm lg:text-base md:text-base p-1">
                    LinkedIn
                  </p>
                  <div className="text-text_primary p-1">
                    <AiFillLinkedin size={25} />
                  </div>
                </div>
              </Link>
              <Link href="https://github.com/JohannRV">
                <div className="flex justify-between items-center rounded-lg bg-tooltip cursor-pointer hover:-translate-y-1 p-8 md:p-0">
                  <p className="text-text_primary m-0 text-sm lg:text-base md:text-base p-1">
                    Github
                  </p>
                  <div className="text-text_primary p-1">
                    <AiFillGithub size={25} />
                  </div>
                </div>
              </Link>
              <Link href="mailto:johnrv.developer@gmail.com">
                <div className="flex justify-between items-center rounded-lg bg-tooltip cursor-pointer hover:-translate-y-1 p-8 md:p-0">
                  <p className="text-text_primary m-0 text-sm lg:text-base md:text-base p-1">
                    Mail
                  </p>
                  <div className="text-text_primary p-1">
                    <SiGmail size={25} />
                  </div>
                </div>
              </Link>
              <Link href="tel:+506 85900906">
                <div className="flex justify-between items-center rounded-lg bg-tooltip cursor-pointer hover:-translate-y-1 p-8 md:p-0">
                  <p className="text-text_primary m-0 text-sm lg:text-base md:text-base p-1">
                    Phone number
                  </p>
                  <div className="text-text_primary p-1">
                    <BsFillPhoneFill size={25} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default page;
/*  <div className="mt-1 px-2 py-5 border-2 border-borderMain rounded-lg pb-5 ml-20">
            <h2 className="text-text_primary selection: text-xl">link 1</h2>
          </div> */
