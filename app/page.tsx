import { X } from "lucide-react";
import Image from "next/image";
import CommunityPartnerships from "./sections/communityPartnerships";
import Fellowships from "./sections/Fellowships";
import Major from "./sections/major";
import AdvocacyTalks from "./sections/talks";
import WorkExperienceComponent from "./sections/workExperience";
import Writing from "./sections/writing";

export default function Home() {
  const communityPartnerships = {
    "Builder Sundays": {
      description:
        "Supported Shopify in its launch of Builder Sundays (a coworking community in Toronto).",
      date: "2024",
    },
    "The Kitchen": {
      description:
        "Collaborated with Communitech to launch a collaborative space for students to work on independent projects.",
      date: "2024",
    },
    "The Dungeon": {
      description:
        "Pitched Velocity on a low-barrier space for students to host events. Scoped the project, designed the interior, helped hire students to manage the space and paint a mural.",
      date: "2024",
    },
    "Douze à Deux": {
      description:
        "Founded a Montreal Socratica chapter, collaborating with McGill’s Building21.",
      date: "2023",
    },
    "Shad Campus Club": {
      description:
        "Hired by Shad to coach Shad Campus Club Leaders through establishing a presence on various university campuses.",
      date: "2023",
    },
    "Startup Barn": {
      description:
        "Worked closely with founder to build an ecosystem of relationships between University of Waterloo alumni & students.",
      date: "2022",
    },
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <p>Hey, nice to meet you!! I'm Joss 😁</p>
          <p>
            As a
            ✨writer-software-developer-community-builder-systems-design-engineer✨,
            most of my brainpower is spent thinking about how we can design and
            iterate on social, economic, digital, and physical systems to help
            humans (individually AND collectively) live our best lives.
          </p>
          <p>
            For the next four months, I'll be working on my own projects (stay
            tuned!), but am always open to chat about big ideas and
            opportunities related to community building, startups, walkable
            cities/urbanism, software/tech, and economics and incentives. We
            will be great friends if you're kind, nerdy, and ambitious 😁 (in
            that order!).
          </p>
          <p>
            MAJOR bonus points if you have a track record of creating
            opportunities for the people around you and understand how important
            it is to centre inclusion and diverse representation in everything
            you do.
          </p>
          <p>Talk soon!</p>
          <p> Joss</p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X />
            Example Button{" "}
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        <Major />
        <CommunityPartnerships />
        <div></div>
        <h1> Collections </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
          <div className="bg-blue-100 rounded-xl p-4">
            <h2> Engineering Projects</h2>
            <p>
              Tinkering, school assignments, design teams, stuff I'm proud of!
            </p>
          </div>
          <div className="bg-purple-100 rounded-xl p-4">
            <h2> Drawing & Painting </h2>
            <p> For safekeeping :) </p>
          </div>
          <div className="bg-red-100 rounded-xl p-4">
            <h2> Photo & Video </h2>
            <p>
              30+ short videos and hundreds of photos that capture my past 5
              years
            </p>
          </div>
          <div className="bg-orange-100 rounded-xl p-4">
            <h2> Fun ! </h2>
            <p>Hobbies, sports & silly edits for the especially curious</p>
          </div>
        </div>
        <Writing />
        <AdvocacyTalks />
        <Fellowships />
        <WorkExperienceComponent />
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Example
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Example
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Example →
        </a>
      </footer>
    </div>
  );
}
