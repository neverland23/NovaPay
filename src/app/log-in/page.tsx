import React, { Suspense } from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import LoginInInner from "@/components/LoginInInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Log-in | NovaPay Money Exchange Next JS Template",
    description:
      "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Log-in | NovaPay",
      description:
        "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://novapay.co/log-in",
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

      {/* LoginInInner wrapped in Suspense for useSearchParams */}
      <Suspense fallback={<div>Loading...</div>}>
        <LoginInInner />
      </Suspense>
    </AOSWrap>
  );
};

export default Page;
