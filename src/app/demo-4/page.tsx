import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderTwo from "@/components/TopHeaderTwo";
import HeaderTwo from "@/components/HeaderTwo";
import BannerFour from "@/components/BannerFour";
import BrandSliderOne from "@/components/BrandSliderOne";
import GlobalPaymentsOne from "@/components/GlobalPaymentsOne";
import OurFeatureTwo from "@/components/OurFeatureTwo";
import PaymentSolutionOne from "@/components/PaymentSolutionOne";
import WhyChooseUs from "@/components/WhyChooseUs";
import PaymentMethodTwo from "@/components/PaymentMethodTwo";
import PricingPlanTwo from "@/components/PricingPlanTwo";
import TeamMemberOne from "@/components/TeamMemberOne";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import BlogFour from "@/components/BlogFour";
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
      url: "https://nextjs.novapay.wowtheme7.com",
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
      <TopHeaderTwo />

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BannerFour */}
      <BannerFour />

      {/* BrandSliderOne */}
      <BrandSliderOne />

      {/* GlobalPaymentsOne */}
      <GlobalPaymentsOne />

      {/* OurFeatureTwo */}
      <OurFeatureTwo />

      {/* PaymentSolutionOne */}
      <PaymentSolutionOne />

      {/* WhyChooseUs */}
      <WhyChooseUs />

      {/* PaymentMethodTwo */}
      <PaymentMethodTwo />

      {/* PricingPlanTwo */}
      <PricingPlanTwo />

      {/* TeamMemberOne */}
      <TeamMemberOne />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />

      {/* BlogFour */}
      <BlogFour />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
