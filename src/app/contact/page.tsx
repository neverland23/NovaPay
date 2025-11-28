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
    title: "Contact | NovaPay",
    description:
      "This is NovaPay Contact Us",
    openGraph: {
      title: "Contact | NovaPay",
      description:
        "This is NovaPay Contact Us",
      url: "https://nextjs.novapay.wowtheme7.com/contact",
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
