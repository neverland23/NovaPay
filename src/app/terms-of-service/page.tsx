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
    title: "Terms of Service | NovaPays - User Agreement",
    description:
      "Review NovaPays's terms of service and user agreement. Understand your rights and responsibilities when using our platform, including account usage, transaction policies, fees, and service limitations.",
    openGraph: {
      title: "Terms of Service | NovaPays - User Agreement",
      description:
        "Review NovaPays's terms of service and user agreement. Understand your rights and responsibilities when using our platform, including account usage, transaction policies, fees, and service limitations.",
      url: "https://novapays.co/terms-of-service",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Terms of Service - User Agreement",
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
