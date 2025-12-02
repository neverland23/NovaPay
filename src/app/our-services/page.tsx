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
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Our Services | NovaPays - Complete Payment Solutions",
    description:
      "Discover NovaPay's comprehensive range of financial services including international money transfers, remittance, currency exchange, digital wallet, and payment processing. Fast, secure, and reliable solutions for all your payment needs.",
    openGraph: {
      title: "Our Services | NovaPays - Complete Payment Solutions",
      description:
        "Discover NovaPays's comprehensive range of financial services including international money transfers, remittance, currency exchange, digital wallet, and payment processing. Fast, secure, and reliable solutions for all your payment needs.",
      url: "https://novapays.co/our-services",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Services - Complete Payment Solutions",
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
      <Breadcrumb title={"Our Services"} />

      {/* WhyChooseUs */}
      <WhyChooseUs />

      {/* Services */}
      <Services moreBtnHidden={true} />

      {/* FAQ */}
      <FAQ />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </AOSWrap>
  );
};

export default Page;
