import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import {
  Pacifico,
  Montserrat,
  Dancing_Script,
  Caveat,
  Rampart_One,
} from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mont",
});
const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat",
});
const rampartOne = Rampart_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart-one",
});

export const metadata = {
  title: "Neeraj Joshi -Portfolio",
  description:
    "Hello, My name is Neeraj a web-developer and this is my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${montserrat.variable} ${dancingScript.variable} ${caveat.variable} ${rampartOne.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
