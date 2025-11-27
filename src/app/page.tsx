import type { Metadata } from "next";
import TopHeaderOne from "@/components/TopHeaderOne";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import BannerOne from "@/components/BannerOne";
import AOSWrap from "@/helper/AOSWrap";
import OurFeatureOne from "@/components/OurFeatureOne";
import NovapayOne from "@/components/NovapayOne";
import ServicesOne from "@/components/ServicesOne";
import RequestSectionOne from "@/components/RequestSectionOne";
import WorkingSectionOne from "@/components/WorkingSectionOne";
import MobileSectionOne from "@/components/MobileSectionOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import FAQOne from "@/components/FAQOne";
import PaymentMethodOne from "@/components/PaymentMethodOne";
import BlogOne from "@/components/BlogOne";
import NewsletterOne from "@/components/NewsletterOne";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | NovaPay",
    description:
      "This is NovaPay Home",
    openGraph: {
      title: "Home | NovaPay",
      description:
        "This is NovaPay Home",
      url: "https://nextjs.novapay.wowtheme7.com",
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

export default function Home() {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* OurFeatureOne */}
      <OurFeatureOne />

      {/* NovapayOne */}
      <NovapayOne />

      {/* ServicesOne */}
      <ServicesOne />

      {/* WorkingSectionOne */}
      <WorkingSectionOne />

      {/* FAQOne */}
      <FAQOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
}
