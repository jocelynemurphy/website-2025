// make a collections functional component
import Link from "next/link";

export default function Collections() {
  return (
    <div className="w-full">
      <h1> Collections </h1>
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {/* <Link
          href="/engineering"
          className="bg-blue-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:rotate-2 block"
        >
          <h3> Engineering </h3>
          <p>
            Tinkering, school assignments, design teams, stuff I'm proud of!
          </p>
        </Link> */}
        <Link
          href="http://boxx.substack.com"
          target="_blank"
          className="bg-blue-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:-rotate-2 block"
        >
          <h3> Writing </h3>
          <p>boxx.substack.com 😎</p>
        </Link>
        <Link
          href="/art-portfolio"
          className="bg-purple-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:-rotate-1 block"
        >
          <h3> Art </h3>
          <p>{" Stored here for safekeeping 🎨"}</p>
        </Link>
        <Link
          href="/photo-video"
          className="bg-red-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:rotate-1 block"
        >
          <h3> Video </h3>
          <p>Cinematic, silly & slice-of-life 💅</p>
        </Link>
        <Link
          href="/work-school"
          className="bg-orange-100 rounded-xl p-4 hover:shadow-lg hover:scale-102 transition-transform duration-200 ease-in-out hover:-rotate-2 block"
        >
          <h3> Work, School, etc. </h3>
          <p>For the especially curious website snoopers 🕵️</p>
        </Link>
      </div>
    </div>
  );
}
