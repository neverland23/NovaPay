import React, { Suspense } from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import SignUpInner from "@/components/SignUpInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Sign Up | NovaPays - Create Your Account",
    description:
      "Join NovaPays today and start sending money securely worldwide. Create your free account in minutes with email verification. Enjoy fast transfers, competitive rates, and 24/7 customer support. Sign up now and experience the future of digital payments.",
    openGraph: {
      title: "Sign Up | NovaPays - Create Your Account",
      description:
        "Join NovaPays today and start sending money securely worldwide. Create your free account in minutes with email verification. Enjoy fast transfers, competitive rates, and 24/7 customer support. Sign up now and experience the future of digital payments.",
      url: "https://novapays.co/sign-up",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "Sign Up for NovaPays - Create Your Account",
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

      {/* SignUpInner wrapped in Suspense for useSearchParams */}
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpInner />
      </Suspense>
    </AOSWrap>
  );
};

export default Page;
