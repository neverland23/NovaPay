import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";

import Breadcrumb from "@/components/Breadcrumb";
import BlogDetailsInner from "@/components/BlogDetailsInner";
import NewsletterTwo from "@/components/NewsletterTwo";
import FooterThree from "@/components/FooterThree";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog Details | NovaPay Money Exchange Next JS Template",
    description:
      "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Blog Details | NovaPay",
      description:
        "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
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
      {/* TopHeaderTwo */}
      <TopHeaderOne />
      {/* HeaderTwo */}
      <HeaderOne />
      {/* Breadcrumb */}
      <Breadcrumb title={"Blog Details"} />
      {/* BlogDetailsInner */}
      <BlogDetailsInner />
      {/* NewsletterTwo */}
      <NewsletterTwo />
      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
