import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function SocialBar() {
  return (
    <div className="flex  ">
      <Link className="hover:opacity-80" href="https://github.com/tuananh131001">
        {" "}
        <AiFillGithub size={40}></AiFillGithub>
      </Link>
      <Link className="hover:opacity-80" href="https://linkedin.com/in/tuananh131001/">
        <AiFillLinkedin size={40}></AiFillLinkedin>
      </Link>
    </div>
  );
}

export default SocialBar;
