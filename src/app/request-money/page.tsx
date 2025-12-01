import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardRequestMoney from "@/components/DashboardRequestMoney";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Dashboard - Request Money | NovaPay",
    description:
      "This is NovaPay Dashboard Request Money",
    openGraph: {
      title: "Dashboard - Request Money | NovaPay",
      description:
        "This is NovaPay Dashboard Request Money",
      url: "https://novapay.co/request-money",
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
      <DashboardLayout>
        {/* DashboardRequestMoney */}
        <DashboardRequestMoney />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
