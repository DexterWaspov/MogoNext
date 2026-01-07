import type { Metadata } from "next";
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import { Roboto, Montserrat, Kaushan_Script } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

/* Font Awesome Config */
config.autoAddCss = false;


/* Google Fonts */
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic']
});

const kaushanScript = Kaushan_Script({
    variable: "--font-kaushanscript",
    subsets: ["latin"],
    weight: ['400'],
    style: ['normal']
});


export const metadata: Metadata = {
  title: "MoGo",
  description: "MoGo template on next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} ${kaushanScript.variable}`}>
          <Header />
          <main className="content bg-white">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
