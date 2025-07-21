import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout";

const roboto = Roboto({
  variable: "--font-roboto-var",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-var",
  weight: "200"
});

export const metadata: Metadata = {
  title: "Finance",
  description: "Aplicación de administración de finanzas personales",
  authors: [{name: "Sebastian Pabon Lopez", url: "www.sebastianpabon.com"}],
  keywords: ["finance", "money", "budget", "expenses", "income"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} ${poppins.variable} antialiased font-roboto bg-background-light dark:bg-background-dark`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
