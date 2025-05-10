export default function Writing() {
  const writings = {
    "Jocelyne Murphy on the year tech showed up": {
      year: 2024,
      subtitle: null,
      link: "#",
    },
    "The Four Circles of Belonging": {
      year: 2024,
      subtitle: "A tactical guide for finding meaningful connection",
      link: "#",
    },
    "Sensitivity-to-the-world": {
      year: 2023,
      subtitle:
        "on 'giftedness,' ADHD, and the storytelling of sensory sensitivity",
      link: "#",
    },
    "World-building IRL": {
      year: 2023,
      subtitle:
        "Engineering high-quality communities that don't break at scale",
      link: "#",
    },
    "Why I do what I do": {
      year: 2022,
      subtitle: null,
      link: "#",
    },
  };

  return (
    <div>
      <h1>Writing</h1>
      {Object.entries(writings).map(([name, { year, subtitle, link }]) => (
        <div key={name} className="flex flex-col gap-2">
          <h3>
            <a href={link} className="text-blue-500 hover:underline">
              {name}
            </a>
          </h3>
          {subtitle && <p>{subtitle}</p>}
          <p>{year}</p>
        </div>
      ))}
    </div>
  );
}
