import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send the email to your server
    console.log(`Email for newsletter: ${email}`);
  };

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
