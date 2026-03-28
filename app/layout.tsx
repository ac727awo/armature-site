import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armature Wealth Office | A Better Way to Manage Wealth",
  description:
    "A wealth operating system for accomplished professionals. Governance, integration, and clarity for those with $8M–$15M+ net worth.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#f5f0eb" }}>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#f5f0eb",
          color: "#1c3828",
          fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
