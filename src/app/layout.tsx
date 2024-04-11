import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { NextUIProvider } from "../lib/next-ui";
import { Suspense } from "react";
import Loading from "./loading";


const raleway = Raleway({ subsets: ["cyrillic"] });

// TITLE AND OTHER METADATA
export const metadata: Metadata = {
  title: 'ФГ "Пан Білан"',
  description: 'ФГ "Пан Білан" запрошує школи, дитячі садки і всіх бажаючих на екскурсії до нашого господарства',
  icons: {
    icon: '/favicon.ico'
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
        <body className={raleway.className}>
          <NextUIProvider>
            <AppRouterCacheProvider> 
              
              <header>
                <Header />
              </header>

              <main>
                {children}
              </main>

              <footer>
                <Footer />
              </footer>
            
            </AppRouterCacheProvider>
          </NextUIProvider>
        </body>    
      </html>
    
  );
}
