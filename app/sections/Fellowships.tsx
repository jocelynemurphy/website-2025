export default function Fellowships() {
  const fellowships = {
    "Interact Fellowship": {
      year: "2023",
      description:
        "For young technologists to seek out difficult conversations, collaborate, and push each other to do good in the world.",
      link: "#",
    },
    "Contrary Capital Venture Scout": {
      year: "2021 – 2023",
      description:
        "Exceptional students from US and Canadian universities are on-campus resources for founders, evaluate startups, and gain investing experience.",
      link: "#",
    },
    "RippleX Fellowship": {
      year: "2022",
      description:
        "Students from underrepresented backgrounds are taught the intricacies of startup building and venture capital.",
      link: "#",
    },
    "TD Scholarship for Community Leadership ($70,000)": {
      year: "2020",
      description:
        "Recognizes 20 Canadian students who have demonstrated outstanding dedication to their community",
      link: "#",
    },
    "Adam Weiss Community Leadership Award ($6,000)": {
      year: "2020",
      description:
        "Awarded to students in the Science faculty for academic excellence, leadership involvement, and a demonstrated interest in entrepreneurship",
      link: "#",
    },
    "Norman Esch Enterprise Co-op Award ($12,500)": {
      year: "2023",
      description:
        "Awarded for winning the entrepreneurship co-op pitch competition in F2023 and S2024",
      link: "#",
    },
    "WUSA Change Engine Pitch Competition ($5,000)": {
      year: "2022",
      description:
        "Awarded to students who can turn advocacy ideas into meaningful projects that impact change on campus",
      link: "#",
    },
    "Velocity Pitch Competition (Finalist – top 8%)": {
      year: "2022",
      description:
        "Competed against over 100 student teams in a multi-week pitch competition",
      link: "#",
    },
    "UW Alumni Women in Technology Entrance Scholarship ($5,000)": {
      year: "2020",
      description:
        "Promoted from a pool of 65 recipients of the Engineering Entrance Award (Top 0.8% of all Engineering students)",
      link: "#",
    },
    "Sandford Fleming Foundation Debate Award (2 × $1,000)": {
      year: "2021",
      description:
        "Awarded for being a two-time finalist in the Engineering Debate Competition",
      link: "#",
    },
    "RBC Future Launch Challenge ($20,000)": {
      year: "2021",
      description:
        "National competition that supports youth leaders (Aged 15-29) as they address priorities in their communities",
      link: "#",
    },
  };

  return (
    <div>
      <h1>Education, Fellowships & Supporters </h1>
      <div className="bg-amber-100 p-4 rounded-xl">
        <h3>University of Waterloo</h3>
        <p> B.A. Sc. Systems Design Engineering</p>
        <p> September 2020 - April 2025</p>
        <p> 83.8 GPA</p>
      </div>
      {Object.entries(fellowships).map(
        ([name, { year, description, link }]) => (
          <div key={name} className="flex flex-col gap-2">
            <h3>
              <a href={link} className="text-blue-500 hover:underline">
                {name}
              </a>
            </h3>
            <p>{year}</p>

            <p>{description}</p>
          </div>
        )
      )}
    </div>
  );
}
