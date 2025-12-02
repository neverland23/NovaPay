import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | NovaPays - Reset Your Password",
  description:
    "Forgot your NovaPays password? Reset it securely by entering your email address. We'll send you a password reset link to create a new password. Quick and secure password recovery process.",
  openGraph: {
    title: "Forgot Password | NovaPays - Reset Your Password",
    description:
      "Forgot your NovaPays password? Reset it securely by entering your email address. We'll send you a password reset link to create a new password. Quick and secure password recovery process.",
    url: "https://novapays.co/forgot-password",
    type: "website",
    images: [
      {
        url: "https://novapays.co/images/meta.png",
        width: 1200,
        height: 630,
        alt: "NovaPays Forgot Password - Reset Your Password",
      },
    ],
  },
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

