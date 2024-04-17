import Head from "next/head";
import React from "react";
import HeroSection from "../components/HeroSection"; // Adjust path as necessary
import SignupForm from "../components/SignupForm"; // Adjust path as necessary

export default function Home() {
  return (
    <>
      <Head>
        <title>The Test Automation Experience</title>
        <meta
          name="description"
          content="Subscribe to get the latest updates from The Test Automation Experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <SignupForm />
      </main>

      <footer>{/* Footer content */}</footer>
    </>
  );
}
