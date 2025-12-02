import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardTransactions from "@/components/DashboardTransactions";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Transactions | NovaPays - View Payment History",
    description:
      "View and manage all your NovaPays transactions in one place. Track money transfers, check payment status, download receipts, and monitor your transaction history with detailed filters and search functionality.",
    openGraph: {
      title: "Transactions | NovaPays - View Payment History",
      description:
        "View and manage all your NovaPays transactions in one place. Track money transfers, check payment status, download receipts, and monitor your transaction history with detailed filters and search functionality.",
      url: "https://novapays.co/transactions",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Transactions - View Payment History",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <DashboardLayout>
        {/* DashboardTransactions */}
        <DashboardTransactions />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
