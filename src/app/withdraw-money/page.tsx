import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardWithdrawMoney from "@/components/DashboardWithdrawMoney";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Withdraw Money | NovaPay",
    description:
      "This is NovaPay Withdraw Money",
    openGraph: {
      title: "Withdraw Money | NovaPay",
      description:
        "This is NovaPay Withdraw Money",
      url: "https://novapay.co/withdraw-money",
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
        {/* DashboardWithdrawMoney */}
        <DashboardWithdrawMoney />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
