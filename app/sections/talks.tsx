import Image from "next/image";

export default function AdvocacyTalks() {
  const advocacyTalks = {
    // "Worldbuilding IRL, Landing Tech Internships Panel": {
    //   year: 2025,
    //   subtitle: "CUSEC 2025",
    //   description:
    //     "Shared learnings from building community at Waterloo with engineering students from around Canada.",
    //   link: "#",
    // },
    "Canadian tech vantage points: Cohere... Socratica": {
      year: 2024,
      subtitle: "BetaKit Town Hall",
      description:
        "Spoke to 500+ senior tech leaders, spurring a wave of action to support young Canadian engineers and entrepreneurs.",
      link: "https://youtu.be/kvNMyruc4pA?si=Tb_R_8vTRLIYFQkD&t=1621",
    },
    "Conversations with next-gen talent": {
      year: 2024,
      subtitle: "Waterloo Innovation Summit 2024",
      description:
        "Interviewed by UW President & Vice Chancellor Vivek Goel about UW Startups, Socratica, and the future of work.",
      link: "https://youtu.be/OdJEzOWYEnA?si=Nnid4Ce4ygilXvDA&t=7508",
    },
    "Wygo, entrepreneurship, and the loneliness epidemic": {
      year: 2024,
      subtitle: "Socratica Symposium",
      description:
        "Shared the story of starting my company with an audience of 700 attendees.",
      link: "https://www.youtube.com/live/xQFHZhmiJuA?t=6698s",
    },
    "Social Engineering 101 (How to not be cringe)": {
      year: 2023,
      subtitle: "Contrary Capital Venture Partner Retreat",
      description:
        "A talk on designing inclusive engineering and entrepreneurial communities in Austin, Texas.",
      link: "https://www.youtube.com/watch?v=657X8w9Hy50&t=1s",
    },
    // "What's Next, What Now Panel": {
    //   year: null,
    //   subtitle: "Women in Engineering Conference",
    //   description:
    //     "Gave advice to young students about navigating university applications, internship recruitment, and engineering culture.",
    //   link: "#",
    // },
  };

  return (
    <div>
      <h1>Advocacy & Talks</h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {Object.entries(advocacyTalks).map(
            ([name, { year, subtitle, description, link }]) => (
              <div
                key={name}
                className="flex flex-col gap-2 bg-blue-100 rounded-xl hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:rotate-1"
              >
                <div className="h-[200px] bg-blue-200 rounded-t-xl">
                  <Image
                    src="/photos/BK-Townhall-Panel.jpg"
                    alt="BK town hall photo"
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <div className="flex flex-col justify-start">
                    <h3>
                      <a
                        href={link}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        {name}
                      </a>
                    </h3>
                    {subtitle && <p>{subtitle}</p>}
                    <p>{description}</p>
                  </div>

                  {year && <p className="flex justify-end">{year}</p>}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
