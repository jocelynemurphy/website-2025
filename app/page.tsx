import Collections from "./(sections)/collections";
import Footer from "./(sections)/footer";
import HomeNav from "./(sections)/homenav";
import Intro from "./(sections)/intro";
import AdvocacyTalks from "./(sections)/talks";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeNav />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-6xl">
        <Intro />
        <Collections />
        {/* <Major /> */}
        <AdvocacyTalks />

        {/* <CommunityPartnerships /> */}
      </main>

      <Footer />
    </div>
  );
}
