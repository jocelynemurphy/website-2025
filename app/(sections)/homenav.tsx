// make a home nav button in the top left corner of the screen that has a single star and routes back to the home page
import Link from "next/link";

export default function HomeNav() {
  return (
    <Link
      href="/"
      className={` bg-white rounded-full fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10  hover:transition-transform hover:rotate-8 hover:scale-115 duration-200 ease-in-out`}
    >
      <h1> ✰ </h1>
    </Link>
  );
}
