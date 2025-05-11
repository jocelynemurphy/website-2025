import Collections from "./sections/collections";
import CommunityPartnerships from "./sections/communityPartnerships";
import Fellowships from "./sections/Fellowships";
import Footer from "./sections/footer";
import Intro from "./sections/intro";
import Major from "./sections/major";
import AdvocacyTalks from "./sections/talks";
import WorkExperienceComponent from "./sections/workExperience";
import Writing from "./sections/writing";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-6xl">
        <Intro />

        <Major />

        <Collections />
        <Writing />
        <WorkExperienceComponent />

        <Fellowships />
        <AdvocacyTalks />

        <CommunityPartnerships />
      </main>

      <Footer />
    </div>
  );
}
