import React from "react";
import "./App.css";
import logo from "./assets/Instagram-Icon.png";
import VideoCard from "./VideoCard";

import avatar from "./assets/avatar.jpg";
import vid1 from "./assets/vid1.mp4";
import vid2 from "./assets/vid2.mp4";
import vid3 from "./assets/vid3.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img className="app__logo" src={logo} alt="logo" />
        <h1>Reels, Scroll to see more</h1>
      </div>
      <div className="app__videos">
        <VideoCard
          Channle="Shadi_Almohtaseb"
          avatarSrc={avatar}
          song="test song"
          url={vid1}
          likes={1975}
          shares={82}
        />

        <VideoCard
          Channle="Shadi_Almohtaseb"
          avatarSrc={avatar}
          song="test song"
          url={vid2}
          likes={1975}
          shares={82}
        />
        <VideoCard
          Channle="Shadi_Almohtaseb"
          avatarSrc={avatar}
          song="test song"
          url={vid3}
          likes={845}
          shares={48}
        />
      </div>
    </div>
  );
}

export default App;
