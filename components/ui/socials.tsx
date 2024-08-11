import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import React from "react";
import { Button } from "./button";

export default function Socials() {
  return (
    <div className="flex items center flex-wrap gap-3">
      {socials.map((social, i) => {
        return (
          <Button key={i} link={social.link} isIcon>
            <span className="w-7 h-7 grid place-items-center">
              {social.icon}
            </span>
          </Button>
        );
      })}
    </div>
  );
}

const socials = [
  {
    icon: <FaLinkedin className="w-5 h-5"></FaLinkedin>,
    link: "",
    userName: "Sami Kazah",
  },
  {
    icon: <FaFacebook className="w-5 h-5"></FaFacebook>,
    link: "",
    userName: "Sami Kazah",
  },
  {
    icon: <FaInstagram className="w-5 h-5"></FaInstagram>,
    link: "",
    userName: "Sami Kazah",
  },
  {
    icon: <GoMail className="w-5 h-5"></GoMail>,
    link: "",
    userName: "Sami Kazah",
  },
];
