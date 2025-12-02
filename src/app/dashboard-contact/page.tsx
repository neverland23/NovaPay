import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardContactUs from "@/components/DashboardContactUs";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Contact Support | NovaPays Dashboard",
    description:
      "Need help with your NovaPays account? Contact our support team directly from your dashboard. Get assistance with transactions, account issues, payment problems, or technical support. We're here to help you 24/7.",
    openGraph: {
      title: "Contact Support | NovaPays Dashboard",
      description:
        "Need help with your NovaPays account? Contact our support team directly from your dashboard. Get assistance with transactions, account issues, payment problems, or technical support. We're here to help you 24/7.",
      url: "https://novapays.co/dashboard-contact",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Contact Support - Dashboard",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <DashboardLayout>
        {/* DashboardContactUs */}
        <DashboardContactUs />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
