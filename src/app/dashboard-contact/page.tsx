import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardContactUs from "@/components/DashboardContactUs";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Contact Us | NovaPay",
    description:
      "This is NovaPay Contact Us",
    openGraph: {
      title: "Contact Us | NovaPay",
      description:
        "This is NovaPay Dashboard",
      url: "https://nextjs.novapay.wowtheme7.com/dashboard",
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
        {/* DashboardContactUs */}
        <DashboardContactUs />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
