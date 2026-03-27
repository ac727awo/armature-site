import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Armature Wealth Partners | A Better Way to Manage Wealth",
  description:
    "A wealth operating system for accomplished professionals. Governance, integration, and clarity for those with $10M–$25M+ net worth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#05120e" }}>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#05120e",
          color: "#f0ebe0",
          fontFamily: "Georgia, 'Times New Roman', serif",
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
