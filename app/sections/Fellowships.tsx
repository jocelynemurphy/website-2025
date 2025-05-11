"use client";
import { useState } from "react";
import CourseCatalog from "./courseSection";

export default function Fellowships() {
  const awards = {
    "Pearl Sullivan Emerging Global Leaders Award ": {
      year: "2025",
      description:
        "Recognizes a graduating student who with determination and passion has worked to make the Waterloo Engineering community a better place and will take that same energy to a career focused on improving the human condition.",
      link: "https://uwaterloo.ca/engineering/pearl-sullivan-emerging-global-leaders-award",
    },
    "Adam Weiss Community Leadership Award": {
      year: "2025",
      description:
        "Awarded to students in the Science faculty for academic excellence, leadership involvement, and a demonstrated interest in entrepreneurship",
      link: "https://uwaterloo.ca/student-awards-financial-aid/awards/adam-weiss-community-leadership-award",
    },
    "1st Place, Change Engine Pitch Competition": {
      year: "2025",
      description:
        "Awarded to students who can turn advocacy ideas into meaningful projects that impact change on campus",
      link: "https://wusa.ca/the-change-engine-recap-empowering-student-innovation/",
    },
    "TD Scholarship for Community Leadership": {
      year: "2020 — 2025",
      description:
        "Recognizes 20 Canadian students who have demonstrated outstanding dedication to their community",
      link: "https://www.td.com/ca/en/personal-banking/solutions/student-banking/community-leadership-scholarship-for-canadians",
    },
    "Finalist, Velocity Pitch Competition": {
      year: "2024",
      description:
        "Competed against over 100 student teams in a multi-week pitch competition",
      link: "https://www.velocityincubator.com/news/velocity-pitch-competition-winter-2024-finalists",
    },
    "Norman Esch Enterprise Co-op Awards": {
      year: "2023 — 2024 ",
      description:
        "Awarded for winning the entrepreneurship co-op pitch competition in F2023 and S2024",
      link: "https://uwaterloo.ca/conrad-school-entrepreneurship-business/undergraduate-students/awards",
    },
    // "UW Alumni Women in Technology Entrance Scholarship": {
    //   year: "2020",
    //   description:
    //     "Promoted from a pool of 65 recipients of the Engineering Entrance Award (Top 0.8% of all Engineering students)",
    //   link: "#",
    // },
    // "Sandford Fleming Foundation Debate Award (2 × $1,000)": {
    //   year: "2021",
    //   description:
    //     "Awarded for being a two-time finalist in the Engineering Debate Competition",
    //   link: "#",
    // },
    "Winner, RBC Future Launch Challenge": {
      year: "2019 — 2020",
      description:
        "National competition that supports youth leaders (Aged 15-29) as they address priorities in their communities",
      link: "https://communityfoundations.ca/rbc-flcc-stories-social-venture-partners-teens-svp-teens-is-creating-a-powerful-network-of-teams-in-k-w/",
    },
  };

  const fellowships = {
    "Interact Fellowship": {
      year: "2023 — Present",
      description:
        "For young technologists to seek out difficult conversations, collaborate, and push each other to do good in the world.",
      link: "https://joininteract.com/",
    },
    "Contrary Capital Venture Scout": {
      year: "2021 — 2023",
      description:
        "Exceptional students from US and Canadian universities are on-campus resources for founders, evaluate startups, and gain investing experience.",
      link: "https://www.contrary.com/",
    },
    "RippleX Fellowship": {
      year: "2022",
      description:
        "Students from underrepresented backgrounds are taught the intricacies of startup building and venture capital.",
      link: "https://www.fellowship.rippleventures.com/",
    },
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <h1>Education, Fellowships & Supporters </h1>
      <div
        className="bg-amber-100 p-4 rounded-xl flex flex-col  hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out"
        onClick={toggleDrawer}
      >
        <div className="flex justify-between">
          <h3>University of Waterloo</h3>
          <p className="p-1"> September 2020 - April 2025</p>
        </div>
        <div className="">
          <p> B.A. Sc. Systems Design Engineering</p>
          <p> 83.8 GPA</p>
        </div>
        <div className="flex justify-center">
          <svg
            className={`flex text-amber-400 text-bold mr-2 h-6 w-6  transition-transform${
              isDrawerOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div
          className={` rounded-xl overflow-scroll transition-all duration-300 ease-in-out ${
            isDrawerOpen
              ? "max-h-96 opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-0"
          }`}
        >
          <div
            className="pb-4 transform transition-transform duration-300"
            style={{
              transform: isDrawerOpen ? "translateY(0)" : "translateY(-20px)",
            }}
          >
            <CourseCatalog />{" "}
          </div>
          <div
            style={{
              transform: isDrawerOpen ? "translateY(0)" : "translateY(-40px)",
            }}
            className="rounded-xl p-4 bg-amber-50 overflow-hidden transform transition-transform duration-700"
          >
            <h3 className="">Capstone Design Project</h3>
            <p>*Insert Description Here*</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        <div className="w-full lg:w-1/2">
          {Object.entries(fellowships).map(
            ([name, { year, description, link }]) => (
              <div key={name} className="flex flex-col pt-2">
                <div className="flex flex-row justify-between">
                  <h3>
                    <a
                      href={link}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      {name}
                    </a>
                  </h3>
                  <p className="mt-1 ">{year}</p>
                </div>
                <p className="lg:pl-4 flex text-balance items-start lg:w-5/6">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
        <div className="w-fill lg:w-1/2">
          {Object.entries(awards).map(([name, { year, link }]) => (
            <div key={name} className="flex flex-col mb-2 pt-1">
              <div className="flex flex-row justify-between text-balance">
                <h3>
                  <a
                    href={link}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    {name}
                  </a>
                </h3>
                <p className=" mt-1">{year}</p>
              </div>
              {/* <p className="lg:pl-4 flex items-start lg:mr-16">{description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
