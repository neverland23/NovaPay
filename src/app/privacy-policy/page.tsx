import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import PrivacyPolicyInner from "@/components/PrivacyPolicyInner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Privacy Policy | NovaPay",
    description:
      "This is NovaPay Privacy Policy",
    openGraph: {
      title: "Privacy Policy | NovaPay",
      description:
        "This is NovaPay Privacy Policy",
      url: "https://novapay.co/blog-details",
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
      {/* Header */}
      <Header />
      {/* Breadcrumb */}
      <Breadcrumb title={"Privacy Policy"} />
      {/* PrivacyPolicyInner */}
      <PrivacyPolicyInner />
      {/* Newsletter */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </AOSWrap>
  );
};

export default Page;
