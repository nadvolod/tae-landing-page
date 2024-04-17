import styles from "./HeroSection.module.css";
import SignupForm from "./SignupForm";

function HeroSection() {
  // Any other state or variables would be defined here

  // Any other functions would be defined here

  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroTitle}>The Test Automation Experience</h1>
      <p className={styles.heroDescription}>Stay up to date</p>
      <SignupForm />
    </div>
  );
}

export default HeroSection;
