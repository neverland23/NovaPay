import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "FAQ | NovaPays - Frequently Asked Questions",
    description:
      "Find answers to common questions about NovaPays services, account setup, money transfers, fees, security, and more. Get instant help with our comprehensive FAQ section covering all aspects of our digital payment platform.",
    openGraph: {
      title: "FAQ | NovaPays - Frequently Asked Questions",
      description:
        "Find answers to common questions about NovaPays services, account setup, money transfers, fees, security, and more. Get instant help with our comprehensive FAQ section covering all aspects of our digital payment platform.",
      url: "https://novapays.co/faq",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays FAQ - Frequently Asked Questions",
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
      <Breadcrumb title={"FAQ"} />

      {/* FAQ */}
      <FAQ />

      {/* NewsletterTwo */}
      <Newsletter />

      {/* FooterThree */}
      <Footer />
    </AOSWrap>
  );
};

export default Page;
