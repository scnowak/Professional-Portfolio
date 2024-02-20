import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello Everyone! I'm Shan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 6 months of experience using React and
          NodeJS. I've just finished a full-stack coding bootcamp through SMU!
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