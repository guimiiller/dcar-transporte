import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DCAR Transporte - Transporte Rodoviário Ágil, Seguro e Econômico",
  description: "A DCAR Transporte oferece soluções de transporte rodoviário para cargas fracionadas, lotação e refrigeradas, com frota moderna e entrega pontual em todo o Brasil. Garantimos eficiência e segurança em fretes locais e de longa distância.",
  keywords: "transporte rodoviário, frete local, frete longa distância, transporte fracionado, transporte lotação, transporte refrigerado, DCAR Transporte, frete seguro, frota moderna, entrega rápida, logística no Brasil, veículos leves, transporte ágil",
  openGraph: {
    title: "DCAR Transporte - Transporte Rodoviário Ágil, Seguro e Econômico",
    description: "DCAR Transporte oferece soluções rápidas e seguras para transporte rodoviário de cargas fracionadas, lotação e refrigeradas, com frota moderna em todo o Brasil.",
    url: "https://www.dcartransporte.com.br",
    siteName: "DCAR Transporte",
    images: [
      {
        url: "https://www.dcartransporte.com.br/imagem-de-exemplo.jpg", // Substitua pela imagem real do site
        width: 1200,
        height: 630,
        alt: "Frota de caminhões da DCAR Transporte",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dcartransporte", // Coloque o nome do usuário no Twitter, se disponível
    title: "DCAR Transporte - Transporte Rodoviário Ágil, Seguro e Econômico",
    description: "DCAR Transporte oferece transporte de cargas fracionadas, lotação e refrigeradas, com uma frota moderna e comprometimento com a segurança e pontualidade das entregas.",
    images: [
      {
        url: "https://www.dcartransporte.com.br/imagem-de-exemplo.jpg", // Substitua pela imagem real do site
        width: 1200,
        height: 630,
        alt: "Frota de caminhões da DCAR Transporte",
      },
    ],
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
