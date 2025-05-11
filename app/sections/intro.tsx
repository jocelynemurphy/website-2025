import { BookHeart, GithubIcon, Linkedin } from "lucide-react";

export default function Intro() {
  return (
    <div>
      {" "}
      <h2 className="my-4 tracking-widest">🌻 🌏 🛴🌿🍄 🌃 🪩🥂💯🦕🏒💥</h2>
      <h1>Hey, nice to meet you!! I'm Joss. 😁 </h1>
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
      <p>Talk soon!!</p>
      <br />
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://www.linkedin.com/in/jmurphyy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto ]"
          href="https://boxx.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookHeart />
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
