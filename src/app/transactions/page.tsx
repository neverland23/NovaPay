import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardTransactions from "@/components/DashboardTransactions";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Dashboard - Transaction | NovaPay",
    description:
      "This is NovaPay Dashboard Transaction",
    openGraph: {
      title: "Dashboard - Transaction | NovaPay",
      description:
        "This is NovaPay Dashboard Transaction",
      url: "https://nextjs.novapay.wowtheme7.com/transactions",
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
        {/* DashboardTransactions */}
        <DashboardTransactions />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
