import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email | NovaPays - Confirm Your Account",
  description:
    "Verify your NovaPays email address to activate your account and access all features. Check your inbox for the verification link or request a new one. Secure email verification process to protect your account.",
  openGraph: {
    title: "Verify Email | NovaPays - Confirm Your Account",
    description:
      "Verify your NovaPays email address to activate your account and access all features. Check your inbox for the verification link or request a new one. Secure email verification process to protect your account.",
    url: "https://novapays.co/verify-email",
    type: "website",
    images: [
      {
        url: "https://novapays.co/images/meta.png",
        width: 1200,
        height: 630,
        alt: "NovaPays Verify Email - Confirm Your Account",
      },
    ],
  },
};

export default function VerifyEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

