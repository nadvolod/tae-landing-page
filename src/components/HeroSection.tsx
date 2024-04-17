import React from "react";
import styles from "./HeroSection.module.css"; // Assuming CSS modules

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <h1>Welcome to The Test Automation Experience</h1>
      <p>Join our community to get the latest episodes!</p>
    </div>
  );
};

export default HeroSection;
