export default function CommunityPartnerships() {
  const communityPartnerships = {
    "Tutoring, Connect Program, Summer Camps": {
      partner: "Adventure4Change",
      description:
        "Mentored youth through volunteer work at Soccer/STEM Camps and tutoring, recruited UW students for Adventure4Change partnerships, and helped students access SHAD and university scholarship opportunities.",
      date: "2019 - 2025",
      link: "#",
    },
    "Builder Sundays": {
      partner: "Shopify",
      description:
        "Supported Shopify in its launch of Builder Sundays (a coworking community in Toronto).",
      date: "2024",
      link: "#",
    },
    "The Kitchen": {
      partner: "Communitech",
      description:
        "Collaborated with Communitech to launch a collaborative space for students to work on independent projects.",
      date: "2024",
      link: "#",
    },
    "The Dungeon": {
      partner: "Velocity",
      description:
        "Pitched Velocity on a low-barrier space for students to host events. Scoped the project, designed the interior, helped hire students to manage the space and paint a mural.",
      date: "2024",
      link: "#",
    },
    "Douze à Deux": {
      partner: "McGill's Building21",
      description:
        "Founded a Montreal Socratica chapter, collaborating with McGill's Building21.",
      date: "2023",
      link: "#",
    },
    "Shad Campus Club": {
      partner: "Shad",
      description:
        "Hired by Shad to coach Shad Campus Club Leaders through establishing a presence on various university campuses.",
      date: "2023",
      link: "#",
    },
    "Startup Barn": {
      partner: "University of Waterloo",
      description:
        "Worked closely with founder to build an ecosystem of relationships between University of Waterloo alumni & students.",
      date: "2022",
      link: "#",
    },
  };

  return (
    <div>
      <h1>Community Partnerships</h1>
      {Object.entries(communityPartnerships).map(
        ([name, { partner, description, date, link }]) => (
          <div key={name} className="flex flex-col gap-2">
            <h3>{name}</h3>
            <p>
              Partner:{" "}
              <a href={link} className="text-blue-500 hover:underline">
                {partner}
              </a>
            </p>
            <p>{date}</p>
            <p>{description}</p>
          </div>
        )
      )}
    </div>
  );
}
