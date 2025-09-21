import {Sometype_Mono} from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";


const sometypeMono = Sometype_Mono ({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "S | Portfolio",
  description: "Shan's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sometypeMono.variable} antialiased overflow-hidden relative`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
