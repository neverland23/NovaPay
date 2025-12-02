import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import PricingPlan from "@/components/PricingPlan";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Dashboard - Pricing Plan | NovaPay",
    description:
      "This is NovaPay Dashboard Pricing Plan",
    openGraph: {
      title: "Dashboard - Pricing Plan | NovaPay",
      description:
        "This is NovaPay Dashboard Pricing Plan",
      url: "https://novapay.co/dashboard-pricing-plan",
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
        {/* PricingPlan */}
        <PricingPlan isDashboard={true} />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
