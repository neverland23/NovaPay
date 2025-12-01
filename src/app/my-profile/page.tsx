import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardMyProfile from "@/components/DashboardMyProfile";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Dashboard - My Profile | NovaPay",
    description:
      "This is NovaPay Dashboard My Profile",
    openGraph: {
      title: "Dashboard - My Profile | NovaPay",
      description:
        "This is NovaPay Dashboard My Profile",
      url: "https://novapay.co/my-profile",
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
        {/* DashboardMyProfile */}
        <DashboardMyProfile />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
