interface CommunityLeadershipItem {
  role: string;
  organization: string;
  period: string;
  achievements: string[];
  link: string;
}

export default function Major() {
  const communityLeadership: Record<string, CommunityLeadershipItem> = {
    "Co-Founder & CEO | Wygo": {
      role: "Founder & CEO",
      organization: "Wygo",
      period: "Sep 2023 — Present",
      achievements: [
        "Founded a company to accelerate the work of community builders",
        "Running 4 initial events, generating $1000 in revenue",
        "Conducted extensive research on community-based solutions to the loneliness epidemic in 8 cities across North America and Europe over the course of 4 Entrepreneurship Co-op Terms",
      ],
      link: "#",
    },
    "Co-founder, Host | UW Startups, Socratica": {
      role: "Co-founder, Host",
      organization: "UW Startups, Socratica",
      period: "Mar 2021 — Present",
      achievements: [
        "Built and organized a diverse, inclusive, and entrepreneurial community of 3500+ students and 100+ leaders in over 30 locations around the world",
        "Facilitated 200+ events and coworking sessions over 3 years",
        "Directly raised over $70,000 to support the growth of the organization",
        "Built relationships with leaders from Shopify, Communitech, Shad, The Accelerator Centre, Catalyst137, Velocity, Conrad, Contrary Capital, 1517 Fund, JAM Music Network, BetaKit, and the University of Waterloo",
      ],
      link: "#",
    },
    "VP Internal | UW Blueprint": {
      role: "VP Internal",
      organization: "UW Blueprint",
      period: "Jan 2022 — Apr 2022",
      achievements: ["la la la"],
      link: "#",
    },
    "Chair, Volunteer | SVP Teens Waterloo Region": {
      role: "Chair, Volunteer",
      organization: "SVP Teens Waterloo Region",
      period: "Sept 2017 — June 2020",
      achievements: [
        "Fundraised and awarded over $22,000 to local charities while driving unprecedented recruitment success from 8 to 85 members in one month",
        "Built a website, hired an employee, and wrote guide for SVP International",
      ],
      link: "#",
    },
  };

  return (
    <div>
      <h1>Things I've spent a ton of time thinking about:</h1>
      {Object.entries(communityLeadership).map(
        ([title, { period, achievements, link }]) => (
          <div key={title} className="flex flex-col gap-2 mb-6">
            <h3>
              <a href={link} className="text-blue-500 hover:underline">
                {title}
              </a>
            </h3>
            <p>{period}</p>
            {achievements && (
              <ul className="list-disc ml-5">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        )
      )}
    </div>
  );
}
