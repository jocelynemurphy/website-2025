import Footer from "../footer";
import HomeNav from "../homenav";
import AWSVideoPlayer from "../videoPlayer";

export const favVideoLibrary = {
  "Highlight Reel | Dramatic !!":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-dramatic.mp4",
  "Montreal '23 | What's the time where you are? 🪩💃🏻🕺🎉":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-montreal.mp4",
  "Europe '23 | 🙊‼️🔥😌❤️🚀🥖🫧🤌 ":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-europe.mp4",
  "Arizona '23 ":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-arizona.mp4",
  "Arizona '23 but more dramatic":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-sceniczona.mp4",

  "Waterloo '22 | I wanna be free! I wanna just live!":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-macklemore.mp4",
  "Waterloo '22 | It's about time!":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-itsabouttime.mp4",
  "Toronto '22 | It comes with a toy! ":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-clearco.mp4",
};

export const SliceOLife = {
  "Waterlo '22 | Babylon can't crack the code! ":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-waterloo1.mp4",
  "Waterloo '22 | You got a Slurpee for free":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-lizzie.mp4",
  "California '22 | Have you read the paper?!?!":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-kissofvenus.mp4",
  "Toronto '22 | She's 18!! And she does what she likes!!":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-paige.mp4",
  "Toronto '22 | Welcome to your life 😎":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-everybodywantstoruletheworld.mp4",
  "Toronto '22 | I got a bicycle, I'm cruisin' down the street.":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-torontobike.mp4",
  "Toronto '22 | 👽 💕":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-mayadelilah.mp4",
  "Toronto '22 | 🍃 ✨":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-torontoscenic.mp4",
};
export const videoLibrary = {
  "🚙": "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-outkast.mp4",

  "🎨": "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-ocad.mp4",
  "🪙": "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-coin.mp4",

  "🌆": "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-kilby.mp4",

  "💃": "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-girl.mp4",
  "⛵️":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-nothingelseicoulddo.mp4",

  "🚗": "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-driving.mp4",
};

export default function PhotoVideo() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeNav />
      <main className="flex flex-col gap-[20px] row-start-2 items-start max-w-6xl">
        <h1 className="flex "> Videos! </h1>
        <h2 className="w-fill"> Favourites </h2>
        <p>
          The type of project that can only come to life when there&apos;s{" "}
          <i>
            <b>some other urgent thing</b>
          </i>{" "}
          being procrastinated.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 pb-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full">
          {Object.entries(favVideoLibrary).map(([title, videoUrl]) => (
            <AWSVideoPlayer
              key={title}
              title={title}
              videoUrl={videoUrl}
              controls={true}
              loop={false}
              muted={true}
              className="w-full"
            />
          ))}
        </div>

        <h2 className="w-fill">{"Slice O' Life 😎"} </h2>
        <p> {"Fun with friends! Hangin' out! The good old days!"}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 pb-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full">
          {Object.entries(SliceOLife).map(([title, videoUrl]) => (
            <AWSVideoPlayer
              key={title}
              title={title}
              videoUrl={videoUrl}
              controls={true}
              loop={false}
              muted={true}
              className="w-full"
            />
          ))}
        </div>
        <h2 className="w-fill"> Cinematic Experiences 💅 </h2>
        <p>
          {" "}
          To be played over and over and{" "}
          <i>
            <b>over</b>
          </i>{" "}
          and over again.{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full">
          {Object.entries(videoLibrary).map(([title, videoUrl]) => (
            <AWSVideoPlayer
              key={title}
              title={title}
              videoUrl={videoUrl}
              controls={true}
              loop={false}
              muted={true}
              className="w-full"
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
