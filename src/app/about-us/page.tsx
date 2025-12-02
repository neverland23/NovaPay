import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterTwo from "@/components/NewsletterTwo";
import Footer from "@/components/Footer";
import AboutInner from "@/components/AboutInner";
import OurBank from "@/components/OurBank";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "About Us | NovaPays - Your Trusted Payment Partner",
    description:
      "Learn about NovaPays's mission to revolutionize digital payments. We provide secure, fast, and transparent money transfer services with cutting-edge technology and exceptional customer support. Discover our story, values, and commitment to financial innovation.",
    openGraph: {
      title: "About Us | NovaPays - Your Trusted Payment Partner",
      description:
        "Learn about NovaPays's mission to revolutionize digital payments. We provide secure, fast, and transparent money transfer services with cutting-edge technology and exceptional customer support. Discover our story, values, and commitment to financial innovation.",
      url: "https://novapays.co/about-us",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "About NovaPays - Your Trusted Payment Partner",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeader */}
      <TopHeader />

      {/* HeaderTwo */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* AboutInner */}
      <AboutInner />

      {/* OurBank */}
      <OurBank />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <Footer />
    </AOSWrap>
  );
};

export default Page;
