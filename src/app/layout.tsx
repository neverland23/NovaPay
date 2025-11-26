import { Wendy_One, Zen_Maru_Gothic } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import ErrorBoundary from "@/helper/ErrorBoundary";

const wendyOne = Wendy_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wendy-one",
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen-maru",
});

export async function generateMetadata() {
  return {
    title: {
      default: "SassTech - SaaS Template",
      template: "%s | SassTech",
    },
    description: "SaaS, IT Solutions, and Software multipurpose template.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${wendyOne.variable} ${zenMaruGothic.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <ErrorBoundary>
          <BootstrapInit />
          <RouteScrollToTop />
        </ErrorBoundary>

        {children}
      </body>
    </html>
  );
}
