import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardNotifications from "@/components/DashboardNotifications";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Notifications | NovaPay Money Exchange Next JS Template",
    description:
      "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Notifications | NovaPay",
      description:
        "NovaPay is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://nextjs.NovaPay.wowtheme7.com/notifications",
      type: "website",
      images: [
        {
          url: "https://nextjs.NovaPay.wowtheme7.com/images/meta.png",
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
        {/* DashboardNotifications */}
        <DashboardNotifications />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
