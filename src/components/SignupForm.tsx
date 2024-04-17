import axios from "axios";
import { useState } from "react";
import styles from "./SignupForm.module.css";

function SignupForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/subscribe", { email });
      alert(response.data.message);
    } catch (error) {
      alert("There was a problem submitting your form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={styles.emailInput}
      />
      <button type="submit" className={styles.subscribeButton}>
        Subscribe
      </button>
    </form>
  );
}

export default SignupForm;
