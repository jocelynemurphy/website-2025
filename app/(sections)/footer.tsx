import { Earth, GithubIcon, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/jmurphyy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jocelynemurphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://wygo.world"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="wygo-logo"
            height={22}
            width={22}
            src="https://personalwebsitecontent.s3.us-east-2.amazonaws.com/wygo-logo-dark-thick.svg"
          />
          Wygo
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://jocelynemurphy.github.io/whyidowhatido"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Earth />
          Why I do what I do
        </a>
      </footer>
    </>
  );
}
