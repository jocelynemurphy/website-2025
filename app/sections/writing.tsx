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
        "On 'giftedness,' ADHD, and the storytelling of sensory sensitivity",
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
    <div className="w-full">
      <h1>Writing</h1>
      {Object.entries(writings).map(([name, { year, subtitle, link }]) => (
        <div key={name} className="flex flex-row justify-between">
          <div className="flex lg:flex-row flex-col">
            <h3>
              <a href={link} className="text-blue-500 hover:underline">
                {name}
              </a>
            </h3>

            {subtitle && (
              <p className="lg:pl-4 flex items-start lg:mr-16">{subtitle}</p>
            )}
          </div>
          <p className="mt-1">{year}</p>
        </div>
      ))}
    </div>
  );
}
