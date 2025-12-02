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
    title: "Pricing Plans | NovaPays - Transparent Fees & Rates",
    description:
      "Compare NovaPays pricing plans and choose the best option for your needs. Transparent fee structure with competitive exchange rates, no hidden charges, and flexible plans for individuals and businesses. See our rates and start saving on money transfers today.",
    openGraph: {
      title: "Pricing Plans | NovaPays - Transparent Fees & Rates",
      description:
        "Compare NovaPays pricing plans and choose the best option for your needs. Transparent fee structure with competitive exchange rates, no hidden charges, and flexible plans for individuals and businesses. See our rates and start saving on money transfers today.",
      url: "https://novapays.co/pricing-plan",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Pricing Plans - Transparent Fees & Rates",
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
