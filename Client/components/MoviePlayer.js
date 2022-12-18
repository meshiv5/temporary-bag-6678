import styles from "../styles/Player/player.module.css";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
export default function MoviePlayer({ queryPart }) {
  const map = new Map();
  map.set("/homepage", "");
  map.set("/tvshows", "");
  map.set("/movies", "");
  map.set("/zeeoriginals", "");
  map.set("/5857", "https://www.youtube.com/watch?v=GaPzttMgV-Y");
  map.set("/8514", "");
  map.set("/premiumcontents", "");
  map.set("/2707", "");
  map.set("/4098", "");
  map.set("/rent", "");
  map.set("/3673", "");
  map.set("/videos", "");
  map.set("/channels", "");
  map.set("/cricket", "");

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div className={styles.videoPalyerDiv}>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=jzYxbnHHhY4&t=3474s"
            width={"90%"}
            height={"700px"}
            playing={true}
            config={{
              youtube: {
                playerVars: { showinfo: 0 },
              },
            }}
          />
        </div>
      )}
    </>
  );
}
