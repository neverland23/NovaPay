import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ContactInner from "@/components/ContactInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Contact Us | NovaPays - Get in Touch",
    description:
      "Have questions about NovaPays services? Contact our support team for assistance with account setup, transactions, payment issues, or general inquiries. We're here to help 24/7 with fast and friendly customer support.",
    openGraph: {
      title: "Contact Us | NovaPays - Get in Touch",
      description:
        "Have questions about NovaPays services? Contact our support team for assistance with account setup, transactions, payment issues, or general inquiries. We're here to help 24/7 with fast and friendly customer support.",
      url: "https://novapays.co/contact",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "Contact NovaPays - Get in Touch",
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
      <Breadcrumb title={"Contact"} />

      {/* ContactInner */}
      <ContactInner />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </AOSWrap>
  );
};

export default Page;
