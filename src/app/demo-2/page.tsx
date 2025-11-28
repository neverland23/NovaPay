import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import BannerTwo from "@/components/BannerTwo";
import WhyChooseUsOne from "@/components/WhyChooseUsOne";
import NovaPayTwo from "@/components/NovaPayTwo";
import HowItWorksOne from "@/components/HowItWorksOne";
import OurPlatformOne from "@/components/OurPlatformOne";
import OurPlatformTwo from "@/components/OurPlatformTwo";
import OurServices from "@/components/OurServices";
import OurFeaturesTwo from "@/components/OurFeaturesTwo";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import FAQTwo from "@/components/FAQTwo";
import BlogThree from "@/components/BlogThree";
import FooterTwo from "@/components/FooterTwo";

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

      {/* TopHeader */}
      <TopHeader />

      {/* Header */}
      <Header />

      {/* BannerTwo */}
      <BannerTwo />

      {/* WhyChooseUsOne */}
      <div className='bg-neutral-10'>
        <WhyChooseUsOne />
      </div>

      {/* NovaPayTwo */}
      <NovaPayTwo />

      {/* HowItWorksOne */}
      <HowItWorksOne />

      {/* OurPlatformOne */}
      <OurPlatformOne />

      {/* OurPlatformTwo */}
      <OurPlatformTwo />

      {/* OurServices */}
      <OurServices />

      {/* OurFeaturesTwo */}
      <OurFeaturesTwo />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />

      {/* FAQTwo */}
      <FAQTwo />

      {/* BlogThree */}
      <BlogThree />

      {/* FooterTwo */}
      <FooterTwo />
    </AOSWrap>
  );
};

export default Page;
