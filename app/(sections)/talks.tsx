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
    "Canadian tech vantage points: Socratica": {
      year: 2024,
      subtitle: "BetaKit Town Hall",
      description:
        "Spoke to 500+ senior tech leaders, spurring a wave of action to support young Canadian engineers and entrepreneurs.",
      link: "https://youtu.be/kvNMyruc4pA?si=Tb_R_8vTRLIYFQkD&t=1621",
      photo:
        "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/media-betakit.jpg",
    },
    "Conversations with next-gen talent": {
      year: 2024,
      subtitle: "Waterloo Innovation Summit ",
      description:
        "Interviewed by UW President & Vice Chancellor Vivek Goel about UW Startups, Socratica, and the future of work.",
      link: "https://youtu.be/OdJEzOWYEnA?si=Nnid4Ce4ygilXvDA&t=7508",
      photo:
        "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/media-vivek.jpeg",
    },
    "Wygo, entrepreneurship, the loneliness epidemic": {
      year: 2024,
      subtitle: "Socratica Symposium",
      description:
        "Shared the story of starting my company with an audience of 700 attendees.",
      link: "https://www.youtube.com/live/xQFHZhmiJuA?t=6698s",
      photo:
        "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/media-symposium.png",
    },
    "Social Engineering 101 (How to not be cringe)": {
      year: 2023,
      subtitle: "Contrary Capital VP Retreat",
      description:
        "A talk on designing inclusive engineering and entrepreneurial communities in Austin, Texas.",
      link: "https://www.youtube.com/watch?v=657X8w9Hy50&t=1s",
      photo:
        "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/media-howtonotbecringe.png",
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
        <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {Object.entries(advocacyTalks).map(([name, talk]) => (
            <div
              key={name}
              className="flex flex-col gap-2 bg-blue-100 rounded-xl hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:rotate-1"
            >
              <div className="h-[200px] bg-blue-200 rounded-t-xl overflow-hidden">
                <Image
                  src={talk.photo || ""}
                  alt="BK town hall photo"
                  height={200}
                  width={200}
                  className="w-full h-full object-cover object-left"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div className="flex flex-col justify-start">
                  <h3>
                    <a
                      href={talk.link}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      {name}
                    </a>
                  </h3>
                  {talk.subtitle && (
                    <p className="flex justify-start font-bold">
                      {talk.subtitle}
                    </p>
                  )}
                  <p className=""> {talk.description}</p>
                  {/* 
                  {talk.year && (
                    <p className="flex justify-end font-bold">{talk.year}</p>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
