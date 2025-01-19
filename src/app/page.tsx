"use client";

import HeroSection from "@/app/hero/page";
import PriceSection from "@/app/price/page";
import LocationSection from "@/app/location/page";
import ImageGallery from "@/app/gallery/page";
import FeaturedProperties from "@/app/featured-properties/page";
import CallToAction from "@/app/calltoaction/page";
import FAQ from "@/app/FAQ/page";
import { ModalProvider } from "@/context/modal-context";
import AboutPage from "@/app/about/page";

export default function Home() {
  

  return (
    <>
    
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
