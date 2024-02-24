import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="selfie"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="code icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a frontend developer with experience 
              creating responsive and optimized websites. I recently completed 
              a full-stack coding bootcamp at Southern Methodist University. During the bootcamp, 
              I gained hands-on experience in building web applications from front to back, using technologies 
              such as HTML, CSS, JavaScript, and various frameworks like React. I'm passionate about 
              crafting user-friendly interfaces and collaborating with teams to deliver impactful 
              digital experiences. Looking forward to applying my skills and continuing to grow in 
              the world of web development!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              As a Backend Developer, I bring classroom-honed expertise in crafting high-performing 
              and efficient backend systems and APIs. Recently completing a comprehensive full-stack 
              coding bootcamp program facilitated by SMU, I have fortified my skills in building robust 
              solutions that seamlessly integrate across various layers of application development. My 
              dedication to mastering the intricacies of backend architecture ensures I am adept at 
              delivering scalable and responsive solutions tailored to meet the evolving needs of 
              modern digital ecosystems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              As a UI designer,  I've crafted numerous landing page designs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};