"use client";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineLink,
  AiOutlineCode,
  AiOutlineFile,
} from "react-icons/ai";

import Link from "next/link";
import { Tooltip } from "@mui/material";

const Sidebar = () => {
  return (
    <div className=" text-white w-16 flex flex-col items-center gap-9 pt-28 pl-5 fixed bg-transparent lg:flex-grow lg:fixed">
      <Tooltip title="Home">
        <div className=" bg-tooltip text-white hover:text-gray-300 p-[7px] rounded-xl hover:bg-tooltip2">
          <Link href="/">
            <AiOutlineHome size={24} />
          </Link>
        </div>
      </Tooltip>
      <Tooltip title="About Me">
        <div className=" bg-tooltip text-white hover:text-gray-300 p-[7px] rounded-xl  hover:bg-tooltip2">
          <Link href="/about">
            <AiOutlineUser size={24} />
          </Link>
        </div>
      </Tooltip>
      <Tooltip title="Projects">
        <div className=" bg-tooltip text-white hover:text-gray-300 p-[7px] rounded-xl  hover:bg-tooltip2">
          <Link href="/projects">
            <AiOutlineCode size={24} />
          </Link>
        </div>
      </Tooltip>
      <Tooltip title="Links">
        <div className=" bg-tooltip text-white hover:text-gray-300 p-[7px] rounded-xl  hover:bg-tooltip2">
          <Link href="/links">
            <AiOutlineLink size={24} />
          </Link>
        </div>
      </Tooltip>
      <Tooltip title="Now">
        <div className=" bg-tooltip text-white hover:text-gray-300 p-[7px] rounded-xl  hover:bg-tooltip2">
          <Link href="/now">
            <AiOutlineClockCircle size={24} />
          </Link>
        </div>
      </Tooltip>
      <Tooltip title="Download CV">
        <div className=" bg-tooltip text-white hover:text-gray-300 p-[7px] rounded-xl hover:bg-tooltip2">
          <a
            href="/Johan_Roman_Vargas_CV.pdf"
            download="Johan_Roman_Vargas_CV.pdf">
            <AiOutlineFile size={24} />
          </a>
        </div>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
