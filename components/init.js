import React from "react";

import Landing from "./app/landing";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import BackgroundShapes from "./layouts/backgroundShapes";

import styles from "../styles/init.module.css";

const Init = () => {
  const backgrounds = [
    styles.blueBackground,
    styles.greenBackground,
    styles.redBackground,
    styles.purpleBackground,
  ];
  const randColor = Math.floor(Math.random() * backgrounds.length);

  return (
    <div id={backgrounds[randColor]}>
      <BackgroundShapes randColor={randColor} id={styles.backgroundArea} />
      <div id={styles.contentArea}>
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </div>
  );
};

export default Init;
