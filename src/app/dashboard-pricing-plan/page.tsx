import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import PricingPlan from "@/components/PricingPlan";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Pricing Plans | NovaPays Dashboard",
    description:
      "View and compare NovaPays pricing plans from your dashboard. See current exchange rates, transaction fees, and plan benefits. Upgrade or change your plan to get the best rates and features for your payment needs.",
    openGraph: {
      title: "Pricing Plans | NovaPays Dashboard",
      description:
        "View and compare NovaPays pricing plans from your dashboard. See current exchange rates, transaction fees, and plan benefits. Upgrade or change your plan to get the best rates and features for your payment needs.",
      url: "https://novapays.co/dashboard-pricing-plan",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays Pricing Plans - Dashboard",
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
