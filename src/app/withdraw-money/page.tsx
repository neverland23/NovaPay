import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardWithdrawMoney from "@/components/DashboardWithdrawMoney";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Withdraw Money | NovaPays - Cash Out Funds",
    description:
      "Withdraw money from your NovaPays account to your bank account or digital wallet. Fast and secure withdrawals with multiple payment methods, competitive fees, and real-time processing. Get your money when you need it.",
    openGraph: {
      title: "Withdraw Money | NovaPays - Cash Out Funds",
      description:
        "Withdraw money from your NovaPays account to your bank account or digital wallet. Fast and secure withdrawals with multiple payment methods, competitive fees, and real-time processing. Get your money when you need it.",
      url: "https://novapays.co/withdraw-money",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Withdraw Money - Cash Out Funds",
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
