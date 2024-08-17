import { Inter, Recursive, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const recursive = Inter({
  subsets: ["latin"],
  display: "swap",
});

import Navbar from "./navbar/page";
import Footer from './footer/page'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
