import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata = {
  title: "Agal Apps | Mobile App Development, Web Applications, Best Mobile App Development Company in Coimbatore, Tamil Nadu, India",
  description: "Agal Apps is a leading mobile app development and IT services company based in Coimbatore, Tamil Nadu, India. We specialize in creating high-quality mobile apps, web applications, and enterprise solutions for businesses across various industries.",
  verification: {
    google: "k7UGxdNpudlod__PoVwWbG5viB_Fdni0pCf3l93fp8g",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${lexend.variable} antialiased bg-white text-zinc-900 font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
