import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | NovaPays - Create New Password",
  description:
    "Create a new password for your NovaPays account. Enter your new secure password to regain access to your account. Follow our password guidelines for maximum security.",
  openGraph: {
    title: "Reset Password | NovaPays - Create New Password",
    description:
      "Create a new password for your NovaPays account. Enter your new secure password to regain access to your account. Follow our password guidelines for maximum security.",
    url: "https://novapays.co/reset-password",
    type: "website",
    images: [
      {
        url: "https://novapays.co/images/meta.png",
        width: 1200,
        height: 630,
        alt: "NovaPays Reset Password - Create New Password",
      },
    ],
  },
};

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

