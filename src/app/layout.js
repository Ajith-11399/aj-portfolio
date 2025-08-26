import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AjContextProvider from "./context/AjContext";
import ClickToTop from "./components/ClickToTop";
import FluidCursor from "./components/FluidCursor";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mont",
  display: "swap",
});

export const metadata = {
  title: "Ajith D. | Full-Stack Web Developer",
  description:
    "Passionate full-stack web developer crafting seamless, user-friendly, and scalable digital experiences.",
  keywords: [
    "Ajith D",
    "Full-Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "JavaScript",
    "Express.Js",
    "Node.Js",
    "MongoDB",
    "AWS",
    "Web Development",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ajith D | Full-Stack Web Developer",
    description:
      "Passionate full-stack web developer crafting seamless, user-friendly, and scalable digital experiences.",
    url: "#",
    siteName: "Ajith D. - Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mont.variable} antialiased leading-8 overflow-x-hidden bg-white text-gray-900`}
      >
        <AjContextProvider>
          <FluidCursor />
          <Header />
          {children}
          <ClickToTop />
          <Footer />
        </AjContextProvider>
      </body>
    </html>
  );
}
