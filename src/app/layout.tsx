import "~/styles/globals.css";

import { Rubik } from "next/font/google";

import AuthProvider from "./_components/providers/auth-provider";
import { CSPostHogProvider } from "./_components/providers/posthog-provider";

import { Toaster } from "~/components/ui/sonner";
import TopNav from "./_components/top-nav";
import Footer from "./_components/footer";

const font = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PawDNS",
  description:
    "As reliable as a cat’s instinct, PawDNS ensures your network is always reachable.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "Dynamic DNS",
    "Free DNS service",
    "PawDNS",
    "Dynamic IP address",
    "Custom subdomains",
    "DNS management",
    "Home network access",
    "Dynamic IP management",
    "Personalized subdomains",
    "Reliable DNS service",
    "Free domain name service",
    "Free domain",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark ${font.className}`}>
        <AuthProvider>
          <CSPostHogProvider>
            <TopNav />
            {children}
            <Footer />
            <Toaster />
          </CSPostHogProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
