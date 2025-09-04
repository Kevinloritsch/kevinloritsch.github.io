import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata = {
  title: "Kevin Loritsch Portfolio",
  description: "A showcase of my projects and experience.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={poppins.className}>
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
