import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";

import Breadcrumb from "@/components/Breadcrumb";
import TermsOfServiceInner from "@/components/TermsOfServiceInner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Terms Of Service | NovaPay",
    description:
      "This is NovaPay Terms Of Service",
    openGraph: {
      title: "Terms Of Service | NovaPay",
      description:
        "This is NovaPay Terms Of Service",
      url: "https://nextjs.novapay.wowtheme7.com/blog-details",
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
      <Breadcrumb title={"Terms of Service"} />
      {/* TermsOfServiceInner */}
      <TermsOfServiceInner />
      {/* Newsletter */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </AOSWrap>
  );
};

export default Page;
