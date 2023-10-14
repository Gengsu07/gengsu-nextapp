import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./components/NavBar";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

const montserat = Montserrat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font--montserrat",
});

const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gengsu Next App",
  description: "apps latihan Next JS by sugeng wahyudi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={montserat.variable}>
        <AuthProvider>
          <NavBar />
          <main className="mt-1 p-2">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
