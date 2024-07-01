"use client"

import HelmetComponent from "@/components/HelmetComponent";
// import FastAndEffiscient from "@/components/sections/FastAndEffiscient";
// import FeedBack from "@/components/sections/FeedBack";
// import Footer from "@/components/sections/Footer";
// import Header from "@/components/sections/Header";
// import Hero from "@/components/sections/Hero";

import About from "@/components/landingPage/About";
import Feature from "@/components/landingPage/Feature";
import Hero from "@/components/landingPage/Hero";
import Layout from "@/components/landingPage/Layout/Layout";
import "./slick.css";
import "./tailwind.css";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HelmetComponent title="Welcome to Twezimbe" description="The quickest way to apply for a Loan in SACCO" />
      {/* <Header />
      <Hero/>
      <FastAndEffiscient />
      <FeedBack />
      <Footer/> */}
      <Layout>
        <Hero />
        <Feature />
        <About />
      </Layout>
    </div>
  );
}
