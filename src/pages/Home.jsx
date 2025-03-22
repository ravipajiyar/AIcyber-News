// Homepage.js
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";


import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import StatsSection from "../components/StatsSection";

import LatestUpdates from "../components/LatestUpdates";
import CyberLaws from "../components/CyberLaws";
import AISolution from "../components/AISolution";
import ResourceLibrary from "../components/ResourceLibrary";
import ReportingTools from "../components/ReportingTools";
import ExpertInsights from "../components/ExpertsInsights";
import CaseStudy from "../components/CaseStudy";
import Blog from "../components/Blog";
import Faq from "../components/Faq";
import ContactUs from "../components/ContactUs";


const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Social Media Bar */}

      {/* Navbar */}
      <Navbar />


      {/* Main Content */}
      <main>
        <HeroSection />
        <StatsSection />
        <LatestUpdates/>
        <CyberLaws/>
        <AISolution/>
        <ResourceLibrary/>
        <ReportingTools/>
        <ExpertInsights/>
        <CaseStudy/>
        <Blog/>
        <Faq/>
        <ContactUs/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;