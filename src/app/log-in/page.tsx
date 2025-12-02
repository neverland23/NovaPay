import React, { Suspense } from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import LoginInInner from "@/components/LoginInInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Log In | NovaPays - Access Your Account",
    description:
      "Sign in to your NovaPays account to manage payments, view transactions, and access all financial services. Secure login with email verification and two-factor authentication support. Forgot your password? Reset it quickly and securely.",
    openGraph: {
      title: "Log In | NovaPays - Access Your Account",
      description:
        "Sign in to your NovaPays account to manage payments, view transactions, and access all financial services. Secure login with email verification and two-factor authentication support. Forgot your password? Reset it quickly and securely.",
      url: "https://novapays.co/log-in",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "Log In to NovaPays - Access Your Account",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* LoginInInner wrapped in Suspense for useSearchParams */}
      <Suspense fallback={<div>Loading...</div>}>
        <LoginInInner />
      </Suspense>
    </AOSWrap>
  );
};

export default Page;
