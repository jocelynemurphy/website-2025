import Footer from "../footer";
import HomeNav from "../homenav";
import AWSVideoPlayer from "../videoPlayer";

export const videoLibrary = {
  Arizona:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-arizona.mp4",
  Clearco:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-clearco.mp4",
  Coin: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-coin.mp4",
  Dramatic:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-dramatic.mp4",
  Driving:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-driving.mp4",
  Europe:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-europe.mp4",
  "Everybody Wants to Rule the World":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-everybodywantstoruletheworld.mp4",
  Girl: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-girl.mp4",
  "It's About Time":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-itsabouttime.mp4",
  Kilby:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-kilby.mp4",
  "Kiss of Venus":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-kissofvenus.mp4",
  Lizzie:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-lizzie.mp4",
  Macklemore:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-macklemore.mp4",
  "Maya Delilah":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-mayadelilah.mp4",
  Montreal:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-montreal.mp4",
  "Nothing Else I Could Do":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-nothingelseicoulddo.mp4",
  OCAD: "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-ocad.mp4",
  OutKast:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-outkast.mp4",
  Paige:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-paige.mp4",
  "Scenic Arizona":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-sceniczona.mp4",
  "Toronto Bike":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-torontobike.mp4",
  "Toronto Scenic":
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-torontoscenic.mp4",
  Waterloo:
    "https://personalwebsitecontent.s3.us-east-2.amazonaws.com/video-waterloo1.mp4",
};

export default function PhotoVideo() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeNav />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-6xl">
        <p> photo video </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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
