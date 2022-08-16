import React, { useState, useRef } from "react";
import "./VideoCard.css";
import VideoFooter from "./VideoFooter";

import VideoHeader from "./VideoHeader";

const VideoCard = ({ Channle, avatarSrc, song, url, likes, shares }) => {
  const [isVideoPlaying, setIsvideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPlayer = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsvideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsvideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        onScrollCapture={handleVideoPlayer}
        ref={videoRef}
        onClick={handleVideoPlayer}
        className="videoCard__player"
        src={url}
        alt="IG Reel Video"
        loop
      />
      <VideoFooter
        avatarSrc={avatarSrc}
        Channle={Channle}
        song={song}
        likes={likes}
        shares={shares}
      />
    </div>
  );
};

export default VideoCard;
