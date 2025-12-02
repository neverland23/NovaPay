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
    title: "Privacy Policy | NovaPays - Your Data Protection",
    description:
      "Read NovaPays's privacy policy to understand how we collect, use, and protect your personal information. Learn about our commitment to data security, user privacy, and compliance with international data protection regulations.",
    openGraph: {
      title: "Privacy Policy | NovaPays - Your Data Protection",
      description:
        "Read NovaPays's privacy policy to understand how we collect, use, and protect your personal information. Learn about our commitment to data security, user privacy, and compliance with international data protection regulations.",
      url: "https://novapays.co/privacy-policy",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Privacy Policy - Your Data Protection",
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
