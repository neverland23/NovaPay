import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardProfileCompleteness from "@/components/DashboardProfileCompleteness";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Dashboard | NovaPay Money Exchange Next JS Template",
    description:
      "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Dashboard | NovaPay",
      description:
        "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://nextjs.novapay.wowtheme7.com/dashboard",
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
      <DashboardLayout>
        {/* DashboardProfileCompleteness */}
        <DashboardProfileCompleteness />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
