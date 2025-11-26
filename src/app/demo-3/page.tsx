import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderTwo from "@/components/TopHeaderTwo";
import HeaderTwo from "@/components/HeaderTwo";
import BannerThree from "@/components/BannerThree";
import WhyChooseUsTwo from "@/components/WhyChooseUsTwo";
import OurFeaturesThree from "@/components/OurFeaturesThree";
import OurBankOne from "@/components/OurBankOne";
import AboutUsThree from "@/components/AboutUsThree";
import MobileOne from "@/components/MobileOne";
import PricingPlanOne from "@/components/PricingPlanOne";
import TestimonialsThree from "@/components/TestimonialsThree";
import FAQThree from "@/components/FAQThree";
import PaymentOne from "@/components/PaymentOne";
import BlogTwo from "@/components/BlogTwo";
import NewsletterTwo from "@/components/NewsletterTwo";
import FooterThree from "@/components/FooterThree";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | NovaPay Money Exchange Next JS Template",
    description:
      "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Home | NovaPay",
      description:
        "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://nextjs.NovaPay.wowtheme7.com",
      type: "website",
      images: [
        {
          url: "https://nextjs.NovaPay.wowtheme7.com/images/meta.png",
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

      {/* TopHeaderTwo */}
      <TopHeaderTwo />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BannerThree */}
      <BannerThree />

      {/* WhyChooseUsTwo */}
      <WhyChooseUsTwo />

      {/* OurFeaturesThree */}
      <OurFeaturesThree />

      {/* OurBankOne */}
      <OurBankOne />

      {/* AboutUsThree */}
      <AboutUsThree />

      {/* MobileOne */}
      <MobileOne />

      {/* PricingPlanOne */}
      <PricingPlanOne />

      {/* TestimonialsThree */}
      <TestimonialsThree />

      {/* FAQThree */}
      <FAQThree />

      {/* PaymentOne */}
      <PaymentOne />

      {/* BlogTwo */}
      <BlogTwo />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
