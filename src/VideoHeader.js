import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import "./VideoHeader.css";
const VideoHeader = () => {
  return (
    <div className="header__icons">
      <ArrowBackIosNewIcon />
      <h1>Reels</h1>
      <CameraAltOutlinedIcon fontSize="medium" />
    </div>
  );
};

export default VideoHeader;
