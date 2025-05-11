export default function CommunityPartnerships() {
  const communityPartnerships = {
    "Tutoring, Connect Program, Summer Camps": {
      partner: "Adventure4Change",
      description:
        "Mentored youth through volunteer work at Soccer/STEM Camps and tutoring, recruited UW students for Adventure4Change partnerships, and helped students access SHAD and university scholarship opportunities.",
      date: "2019 - 2025",
      link: "https://adventure4change.org/",
    },
    "Builder Sundays": {
      partner: "Shopify",
      description:
        "Supported Shopify in its launch of Builder Sundays (a coworking community in Toronto).",
      date: "2024",
      link: "https://www.shopify.com/ca",
    },
    "The Kitchen": {
      partner: "Communitech",
      description:
        "Collaborated with Communitech to launch a collaborative space for students to work on independent projects.",
      date: "2024",
      link: "https://communitech.ca/",
    },
    "The Dungeon": {
      partner: "Velocity",
      description:
        "Pitched Velocity on a low-barrier space for students to host events. Scoped the project, designed the interior, helped hire students to manage the space and paint a mural.",
      date: "2024",
      link: "https://www.velocityincubator.com/",
    },
    "Douze à Deux": {
      partner: "Building21",
      description:
        "Founded a Montreal coworking community, collaborating with McGill's Building21.",
      date: "2023",
      link: "https://www.building21.ca/",
    },
    "Shad Campus Club": {
      partner: "Shad",
      description:
        "Hired by Shad to coach Shad Campus Club Leaders through establishing a presence on various university campuses.",
      date: "2023",
      link: "https://www.shad.ca/",
    },
    " Strategy & Event Partnerships": {
      partner: "Builders Club, Formerly EigenSpace",
      description:
        "Worked closely with founder to build an ecosystem of relationships between University of Waterloo alumni & students.",
      date: "2022",
      link: "https://startupbarn.ca/",
    },
  };

  return (
    <div className="w-full">
      <h1>Community Partnerships</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Object.entries(communityPartnerships).map(
          ([name, { partner, description, date, link }]) => (
            <div
              key={name}
              className="flex flex-col gap-2 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300]"
            >
              <h3 className="text-lg font-semibold">{name}</h3>
              <p>
                Partner:{" "}
                <a href={link} className="text-blue-500 hover:underline">
                  {partner}
                </a>
              </p>
              <p>{date}</p>
              <p className="hidden">{description}</p>
            </div>
          )
        )}
      </div>
      {/* {Object.entries(communityPartnerships).map(
        ([name, { partner, description, date, link }]) => (
        


        //   <div key={name} className="flex flex-col gap-2">
        //     <h3>{name}</h3>
        //     <p>
        //       Partner:{" "}
        //       <a href={link} className="text-blue-500 hover:underline">
        //         {partner}
        //       </a>
        //     </p>
        //     <p>{date}</p>
        //     <p>{description}</p>
        //   </div>
        )
      )} */}
    </div>
  );
}
