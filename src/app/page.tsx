"use client"; // ✅ Keep client-only behavior

// import { useState } from "react";
import HeroSection from "@/app/hero/page";
import PriceSection from "@/app/price/page";
import LocationSection from "@/app/location/page";
import ImageGallery from "@/app/gallery/page";
// import FeaturedProperties from "@/app/featured-properties/page";
import CallToAction from "@/app/calltoaction/page";
import FAQ from "@/app/FAQ/page";
import AboutPage from "@/app/about/page";
// import SplashScreen from "@/components/SplashScreen";
import Script from "next/script";

export default function Home() {
  // const [isPopupVisible, setPopupVisible] = useState(true);

  return (
    <>
      {/* ✅ Show Splash Screen */}
      {/* {isPopupVisible && <SplashScreen onFinish={() => setPopupVisible(false)} />} */}

      {/* ✅ Structured Data for SEO */}
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "NCC Urban Lake Springs",
            "image": "https://www.nccurbanlakesprings.com/images/logo.jpeg",
            "description": "Luxury apartments in JP Nagar, Bangalore with world-class amenities and elegant design.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "JP Nagar",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560078",
              "addressCountry": "IN"
            },
            "telephone": "+91-XXXXXXXXXX",
            "url": "https://urbanlakesprings.in/"
          }
        `}
      </Script>

      {/* ✅ Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <AboutPage />
        <PriceSection />
        <ImageGallery />
        {/* <FeaturedProperties /> */}
        <CallToAction />
        <FAQ />
        <LocationSection />
      </main>
    </>
  );
}
