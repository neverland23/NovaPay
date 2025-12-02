import type { Metadata } from "next";
import TopHeader from "@/components/TopHeader";
import Preloader from "@/helper/Preloader";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AOSWrap from "@/helper/AOSWrap";
import OurFeature from "@/components/OurFeature";
import WhyNova from "@/components/WhyNova";
import Services from "@/components/Services";
import WorkingSection from "@/components/WorkingSection";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | NovaPays - Secure Digital Payment Platform",
    description:
      "NovaPays is a modern digital payment platform offering secure money transfers, remittance services, and online transactions. Experience fast, reliable, and secure financial services with competitive exchange rates and transparent pricing.",
    openGraph: {
      title: "Home | NovaPays - Secure Digital Payment Platform",
      description:
        "NovaPays is a modern digital payment platform offering secure money transfers, remittance services, and online transactions. Experience fast, reliable, and secure financial services with competitive exchange rates and transparent pricing.",
      url: "https://novapays.co",
      type: "website",
      images: [
        {
          url: "https://novapays.co/images/meta.png",
          width: 1200,
          height: 630,
          alt: "NovaPays - Secure Digital Payment Platform",
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

      {/* TopHeader */}
      <TopHeader />

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* OurFeature */}
      <OurFeature />

      {/* WhyNova */}
      <WhyNova />

      {/* Services */}
      <Services />

      {/* WorkingSection */}
      <WorkingSection />

      {/* FAQ */}
      <FAQ />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </AOSWrap>
  );
}
