import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello Everyone! I'm Shan</h1>
        <p className={styles.description}>
        Welcome to my portfolio page, built with React and curated by me, Shan Nowak. Here, you'll 
        discover a curated selection of projects I've contributed to throughout my journey. Equipped 
        with full-stack expertise acquired from the Southern Methodist web developer program, I'm 
        equipped to tackle a wide array of challenges. Additionally, I hold a Bachelor's degree in 
        Computer Information Systems from Tarleton State University.
         
         
        </p>
        <a href="mailto:shan.nowak93@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};