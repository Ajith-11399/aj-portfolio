"use client";
import Head from "next/head";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/project-icon.png" />
      </Head>
      <ScrollToTop />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
