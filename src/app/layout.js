import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Astacumalaka's Movies",
  description: "Searching movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}, bg-black`}>
        <div className="max-w-7xl w-full h-full mx-auto">
          <Navbar />
        </div>
        {children}
        <div className="w-full h-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
