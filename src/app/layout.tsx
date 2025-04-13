import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ndung'u Kinyanjui | Cloud Engineer & Cybersecurity Analyst",
  description: "Professional portfolio of Ndung'u Kinyanjui, showcasing expertise in cloud engineering, cybersecurity, and DevOps solutions.",
  keywords: ["cloud engineer", "cybersecurity analyst", "devops", "AWS", "Azure", "security", "portfolio", "Ndung'u Kinyanjui"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} antialiased min-h-screen flex flex-col font-primary`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
