import Head from "next/head";
import HeroSection from "../components/HeroSection"; // Adjust path as necessary
import "../styles/index.css";

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
      </main>

      <footer>{/* Footer content */}</footer>
    </>
  );
}
