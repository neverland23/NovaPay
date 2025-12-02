import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardRequestMoney from "@/components/DashboardRequestMoney";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Request Money | NovaPays - Send Payment Requests",
    description:
      "Request money from friends, family, or clients through NovaPays. Send secure payment requests via email, set custom amounts, add notes, and track request status. Fast and easy way to collect payments online.",
    openGraph: {
      title: "Request Money | NovaPays - Send Payment Requests",
      description:
        "Request money from friends, family, or clients through NovaPays. Send secure payment requests via email, set custom amounts, add notes, and track request status. Fast and easy way to collect payments online.",
      url: "https://novapays.co/request-money",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Request Money - Send Payment Requests",
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
