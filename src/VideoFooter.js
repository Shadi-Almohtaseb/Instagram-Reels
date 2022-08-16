import React from "react";
import "./VideoFooter.css";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Avatar, Button } from "@mui/material";

const VideoFooter = ({ Channle, avatarSrc, song, url, likes, shares }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__top-icons">
        <div className="videoFooter__top-icon">
          <FavoriteBorderOutlinedIcon />
          {likes}
        </div>
        <div className="videoFooter__top-icon">
          <ModeCommentOutlinedIcon />
          {shares}
        </div>
        <div className="videoFooter__top-icon">
          <SendOutlinedIcon />
        </div>
        <div className="videoFooter__top-icon">
          <MoreVertOutlinedIcon />
        </div>
      </div>
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {Channle} ∙ <Button variant="outlined">Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteOutlinedIcon className="videoFooter__icon" />
        <h3>{song}</h3>
      </div>
    </div>
  );
};

export default VideoFooter;
