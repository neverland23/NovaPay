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
    title: "Faq | NovaPay",
    description:
      "This is NovaPay FAQ",
    openGraph: {
      title: "Faq | NovaPay",
      description:
        "This is NovaPay FAQ",
      url: "https://novapay.co/faq",
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
