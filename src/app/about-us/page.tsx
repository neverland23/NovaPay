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
    title: "About | NovaPay",
    description:
      "This is Nova About",
    openGraph: {
      title: "About | NovaPay",
      description:
        "This is Nova About",
      url: "https://novapay.co/about",
      type: "website",
      images: [
        {
          url: "https://novapay.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPay",
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
