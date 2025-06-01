import Fellowships from "../Fellowships";
import Footer from "../footer";
import HomeNav from "../homenav";
import WorkExperienceComponent from "../workExperience";

export default function WorkSchool() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeNav />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-6xl">
        <WorkExperienceComponent />
        <Fellowships />
      </main>

      <Footer />
    </div>
  );
}
