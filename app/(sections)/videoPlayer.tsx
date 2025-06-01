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
  height = "h-3/4",
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
          Your browser doesn't support HTML5 video. Here is a{" "}
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
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
          <h3 className="text-sm font-medium truncate">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default AWSVideoPlayer;
