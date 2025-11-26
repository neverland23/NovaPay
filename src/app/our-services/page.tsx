import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterTwo from "@/components/NewsletterTwo";
import FooterThree from "@/components/FooterThree";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import FAQOne from "@/components/FAQOne";
import WhyChooseUsThree from "@/components/WhyChooseUsThree";
import OurServicesTwo from "@/components/OurServicesTwo";
import PricingPlanOne from "@/components/PricingPlanOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Our-services | NovaPay Money Exchange Next JS Template",
    description:
      "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Our-services | NovaPay",
      description:
        "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://nextjs.novapay.wowtheme7.com/our-services",
      type: "website",
      images: [
        {
          url: "https://nextjs.novapay.wowtheme7.com/images/meta.png",
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
      <TopHeaderOne />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Our Services"} />

      {/* WhyChooseUsThree */}
      <WhyChooseUsThree />

      {/* OurServicesTwo */}
      <OurServicesTwo />

      {/* PricingPlanOne */}
      <PricingPlanOne />

      {/* TestimonialsTwo */}
      <div className='bg-neutral-10'>
        <TestimonialsTwo />
      </div>

      {/* FAQOne */}
      <FAQOne />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
