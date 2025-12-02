import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardProfileCompleteness from "@/components/DashboardProfileCompleteness";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Dashboard | NovaPays - Manage Your Payments",
    description:
      "Access your NovaPays dashboard to manage transactions, view account balance, track payment history, and monitor your financial activity. Get real-time insights into your money transfers and account status.",
    openGraph: {
      title: "Dashboard | NovaPays - Manage Your Payments",
      description:
        "Access your NovaPays dashboard to manage transactions, view account balance, track payment history, and monitor your financial activity. Get real-time insights into your money transfers and account status.",
      url: "https://novapays.co/dashboard",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Dashboard - Manage Your Payments",
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
