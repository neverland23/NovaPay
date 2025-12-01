import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PricingPlan from "@/components/PricingPlan";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Pricing Plan | NovaPay",
    description:
      "This is NovaPay Pricing Plan",
    openGraph: {
      title: "Pricing Plan | NovaPay",
      description:
        "This is NovaPay Pricing Plan",
      url: "https://novapay.co/pricing-plan",
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

      {/* TopHeader */}
      <TopHeader />

      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={"Pricing Plan"} />

      {/* PricingPlan */}
      <PricingPlan />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </AOSWrap>
  );
};

export default Page;
