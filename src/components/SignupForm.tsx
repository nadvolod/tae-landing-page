import axios from "axios";
import React, { useState } from "react";
import styles from "./SignupForm.module.css"; // Assuming CSS modules

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SignupForm;
