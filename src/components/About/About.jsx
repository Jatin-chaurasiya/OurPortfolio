import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutMe} src={getImageUrl("hero/heroImage1.jpeg")} alt="CursorIcon" />
            <div className={styles.aboutItemText}>
              <h3>About Me</h3>
              <p>
                I am a Second year student of ABES Engineering College
                Ghaziabad.I am persuing BTech from CSE-AIML Branch.
                Currently, I'm a intermediate web devoloper.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="CursorIcon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer (InterMediate)</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer (Beginner)</h3>
              <p>
                I have experience developing fast and optimised back-end systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solving</h3>
              <p>
                I have strong problem-solving skills.And I have solved 300 questions on LeetCode.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
