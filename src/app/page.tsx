import { Suspense } from "react";
import HeroSection from "@/app/hero/page";
import PriceSection from "@/app/price/page";
import LocationSection from "@/app/location/page";
import ImageGallery from "@/app/gallery/page";
import FeaturedProperties from "@/app/featured-properties/page";
import CallToAction from "@/app/calltoaction/page";
import FAQ from "@/app/FAQ/page";
import AboutPage from "@/app/about/page";
import SplashScreen from "@/components/SplashScreen";
import Script from "next/script";
import { metadata } from "./page.metadata";

export { metadata };

export default function Home() {
  return (
    <>
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

      <Suspense fallback={<SplashScreen />}>
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
      </Suspense>
    </>
  );
}
