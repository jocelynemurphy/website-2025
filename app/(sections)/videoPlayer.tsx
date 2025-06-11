interface AWSVideoPlayerProps {
  videoUrl: string;
  title?: string;
  width?: string;
  height?: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  className?: string;
}

const AWSVideoPlayer: React.FC<AWSVideoPlayerProps> = ({
  videoUrl,
  title = "",
  width = "w-full",
  height = "h-full",
  autoPlay = false,
  controls = true,
  muted = false,
  loop = false,
  poster,
  className = "",
}) => {
  return (
    <div className={`relative ${width} ${height} ${className}`}>
      <video
        className="w-full h-full object-cover rounded-lg shadow-lg"
        src={videoUrl}
        title={title}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        poster={poster}
        preload="metadata"
      >
        <p className="text-gray-600 p-4">
          {"Your browser doesn't support HTML5 video. "}
          <a
            href={videoUrl}
            className="text-blue-500 hover:text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            link to the video
          </a>{" "}
          instead.
        </p>
      </video>

      {title && (
        <div className="absolute top-0 left-1 right-0 transition duration-200 bg-opacity-0 opacity-0 hover:opacity-100 hover:bg-opacity-50 text-white p-2 rounded-b-lg">
          <div className="group overflow-hidden whitespace-nowrap">
            <h3 className="text-sm font-medium inline-block transition-transform duration-[4s] ease-linear group-hover:-translate-x-full pr-4">
              {title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AWSVideoPlayer;
