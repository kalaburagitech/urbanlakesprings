"use client";

import HeroSection from "@/app/hero/page";
import PriceSection from "@/app/price/page";
import LocationSection from "@/app/location/page";
import ImageGallery from "@/app/gallery/page";
import FeaturedProperties from "@/app/featured-properties/page";
import CallToAction from "@/app/calltoaction/page";
import FAQ from "@/app/FAQ/page";
import AboutPage from "@/app/about/page";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  

  return (
    <>
     <SplashScreen />
     <main className="flex-grow">
          <HeroSection />
          <AboutPage />
          <PriceSection />
          <LocationSection />
          <ImageGallery />
          <FeaturedProperties />
          <CallToAction />
          <FAQ />
        </main>

    </>
   
       
  
  );
}
