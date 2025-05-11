// make a collections functional component
export default function Collections() {
  return (
    <div>
      <h1> Collections </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
        <div className="bg-blue-100 rounded-xl p-4">
          <h2> Engineering </h2>
          <p>
            Tinkering, school assignments, design teams, stuff I'm proud of!
          </p>
        </div>
        <div className="bg-purple-100 rounded-xl p-4">
          <h2> Art Portfolio </h2>
          <p>
            {" "}
            Drawing, paintings, digital art -- stored here for safekeeping :){" "}
          </p>
        </div>
        <div className="bg-red-100 rounded-xl p-4">
          <h2> Photo & Video </h2>
          <p>
            30+ short videos and hundreds of photos that capture my past 5 years
          </p>
        </div>
        <div className="bg-orange-100 rounded-xl p-4">
          <h2> Fun ! </h2>
          <p>Hobbies, sports & silly edits for the especially curious</p>
        </div>
      </div>
    </div>
  );
}
