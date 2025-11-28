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
    title: "Our-services | NovaPay",
    description:
      "This is NovaPay Our Service",
    openGraph: {
      title: "Our-services | NovaPay",
      description:
        "This is NovaPay Our Service",
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
