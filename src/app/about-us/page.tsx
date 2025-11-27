import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterTwo from "@/components/NewsletterTwo";
import FooterThree from "@/components/FooterThree";
import AboutInner from "@/components/AboutInner";
import OurBankOne from "@/components/OurBankOne";
import WhyChooseUsOne from "@/components/WhyChooseUsOne";
import TeamMemberOne from "@/components/TeamMemberOne";
import JoinSectionOne from "@/components/JoinSectionOne";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import FAQOne from "@/components/FAQOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "About | NovaPay",
    description:
      "This is Nova About",
    openGraph: {
      title: "About | NovaPay",
      description:
        "This is Nova About",
      url: "https://nextjs.novapay.wowtheme7.com/about",
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

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* AboutInner */}
      <AboutInner />

      {/* OurBankOne */}
      <OurBankOne />

      {/* WhyChooseUsOne */}
      <WhyChooseUsOne />
      
      {/* JoinSectionOne */}
      <JoinSectionOne />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
