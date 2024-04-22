import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { NextUIProvider } from "../lib/next-ui";

const raleway = Raleway({ subsets: ["cyrillic"] });

// TITLE AND OTHER METADATA
export const metadata: Metadata = {
  title: '"Пан Білан" | Головна',
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
              <main>
                {children}
              </main>
            </AppRouterCacheProvider>
          </NextUIProvider>
        </body>    
      </html>
    
  );
}
