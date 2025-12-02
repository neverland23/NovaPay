import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardMyProfile from "@/components/DashboardMyProfile";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "My Profile | NovaPays - Manage Your Account",
    description:
      "Update your NovaPays profile information, manage account settings, change password, set up security questions, enable two-factor authentication, and configure wallet addresses. Keep your account secure and up to date.",
    openGraph: {
      title: "My Profile | NovaPays - Manage Your Account",
      description:
        "Update your NovaPays profile information, manage account settings, change password, set up security questions, enable two-factor authentication, and configure wallet addresses. Keep your account secure and up to date.",
      url: "https://novapays.co/my-profile",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays My Profile - Manage Your Account",
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
