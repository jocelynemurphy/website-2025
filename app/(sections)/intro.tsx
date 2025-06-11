import { GithubIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import guyCharacters from "./art-portfolio/guys";

export default function Intro() {
  return (
    <div className="pb-14">
      <div className="flex flex-row overflow-x-scroll  pb-8">
        {Object.entries(guyCharacters).map(([key, guy]) => (
          <div key={key} className="flex-shrink-0">
            <Image
              src={guy.url}
              alt={guy.description}
              className="w-18 h-18 mt-4 object-contain hover:rotate-3 hover:scale-110 transition-transform "
              width={80}
              height={40}
            />
          </div>
        ))}
      </div>
      {/* <h2 className="my-4 tracking-widest">🌻 🌏 🛴🌿🍄 🌃 🪩🥂💯🦕🏒💥</h2> */}
      <h1>Welcome!! I'm Joss. 😁 </h1>
      <p>
        As a
        ✨writer-software-developer-community-builder-systems-design-engineer✨,
        most of my brainpower is spent thinking about how we can design and
        iterate on social, economic, digital, and physical systems to help
        humans (individually AND collectively) live our best lives.
      </p>
      <br />
      <p>
        I'm currently spending most of my time building{" "}
        <a href="https://wygo.world/" target="_blank" className="text-blue-500">
          Wygo
        </a>{" "}
        (stay tuned!), but am always open to chat about big ideas and
        opportunities related to community building, startups, walkable
        cities/urbanism, software/tech, and economics and incentives.{" "}
      </p>
      <br />
      <p>
        We will be great friends if you're kind, nerdy, and ambitious 😁 (in
        that order!). Bonus points if you have a track record of creating
        opportunities for the people around you and understand how important it
        is to centre inclusion and diverse representation in everything you do.
      </p>
      <br />
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors w-full  flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://jocelynemurphy.github.io/whyidowhatido"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p> Why I do what I do </p>
        </a>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          href="https://wygo.world"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="wygo-logo"
            height={22}
            width={22}
            src="https://personalwebsitecontent.s3.us-east-2.amazonaws.com/wygo-rainbow-logo.svg"
          />
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto ]"
          href="https://www.linkedin.com/in/jmurphyy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto ]"
          href="https://github.com/jocelynemurphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}
