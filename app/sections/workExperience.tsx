interface WorkExperience {
  period: string;
  tech?: string;
  description?: string;
  achievements: string[];
  link: string;
}

export default function WorkExperienceComponent() {
  const workExperience: Record<string, WorkExperience> = {
    // "Founder & CEO | Wygo": {
    //   period: "Sep 2023 — Present",
    //   description:
    //     "Founded a company to accelerate the work of community builders.",
    //   achievements: [
    //     "Running 4 initial events, generating $1000 in revenue",
    //     "Conducted extensive research on community-based solutions to the loneliness epidemic in 8 cities across North America and Europe over the course of 4 Entrepreneurship Co-op Terms",
    //   ],
    //   link: "#",
    // },
    "Product Manager | Culdesac": {
      period: "Jan 2023 — Apr 2023",
      tech: "Looker, Notion, Linear, Figma",
      achievements: [
        "Designed a system for collecting, displaying, and reviewing mobility data",
        "Identified opportunities for the engineering team to scale effectively by conducting extensive research on human-centered design",
      ],
      link: "https://culdesac.com/",
    },
    "Software Engineer | Clearco": {
      period: "May 2022 — Jul 2022",
      tech: "TypeScript, Node.js, SQL, Docker, Prisma/SQLite Data, Shortcut, NestJS",
      achievements: [
        "Introduced 53 changes in underwriting, increasing customer revenue recognized by ~1% ($625M), speeding up re-deployment of funds",
      ],
      link: "https://clear.co/",
    },
    "Software Developer | Miovision": {
      period: "Sep 2021 — Dec 2021",
      tech: "TypeScript, C#, Angular, Jasmine, Tailwind CSS, Jira",
      achievements: [
        "Rebuilt the frontend of Miovision's core video processing application with over 85% test coverage, delivering 3 weeks ahead of schedule",
        "Added new functionality to REST APIs in the Validator, Controller, and Manager layers of the backend",
      ],
      link: "https://miovision.com/",
    },
    "Software Developer | Auvik Networks": {
      period: "Jan 2021 — Apr 2021",
      tech: "TypeScript, React, Jira, Looker, Python",
      achievements: [
        "Queried and presented data in Looker dashboards, providing insight into customer networks",
        "Increased speed of pipeline tests by 30% by upgrading test framework",
      ],
      link: "https://www.auvik.com/",
    },
  };

  return (
    <div className="w-full">
      <h1>Work Experience</h1>
      {Object.entries(workExperience).map(
        ([title, { period, tech, description, achievements, link }]) => (
          <div key={title} className="flex flex-col gap-2 mb-6">
            <div className="flex justify-between">
              <h3>
                <a
                  href={link}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {title}
                </a>
              </h3>
              <p>{period}</p>
            </div>

            {tech && <p className="italic">{tech}</p>}
            {description && <p>{description}</p>}
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
