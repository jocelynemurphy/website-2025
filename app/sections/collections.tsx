// make a collections functional component
export default function Collections() {
  return (
    <div>
      <h1> Collections </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="bg-blue-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:rotate-2">
          <h3> Engineering </h3>
          <p>
            Tinkering, school assignments, design teams, stuff I'm proud of!
          </p>
        </div>
        <div className="bg-purple-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:-rotate-1">
          <h3> Art Portfolio </h3>
          <p>
            {" "}
            Drawing, paintings, digital art -- stored here for safekeeping :){" "}
          </p>
        </div>
        <div className="bg-red-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:rotate-1">
          <h3> Photo & Video </h3>
          <p>Cinematic, silly, and slice-of-life stuff from the past 5 years</p>
        </div>
        <div className="bg-orange-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:-rotate-2">
          <h3> Fun ! </h3>
          <p>More content for the especially curious website snoopers</p>
        </div>
      </div>
    </div>
  );
}
