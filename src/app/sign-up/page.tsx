import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import SignUpInner from "@/components/SignUpInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Sign-up | NovaPay",
    description:
      "This is NovaPay Sign UP",
    openGraph: {
      title: "Sign-up | NovaPay",
      description:
        "This is NovaPay Sign UP",
      url: "https://nextjs.novapay.wowtheme7.com/sign-up",
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
      {/* <Preloader /> */}
      <Preloader />

      {/* SignUpInner */}
      <SignUpInner />
    </AOSWrap>
  );
};

export default Page;
