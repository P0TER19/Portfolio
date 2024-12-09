import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./provider"; 

import "./globals.css";

const xProto = localFont({
  src: [
    {
    path: "./fonts/0xProto-Regular.woff2",
    weight:"400",
    },

    {
    path: "./fonts/0xProto-Bold.woff2",
    weight:"700",
    },

    {
    path: "./fonts/0xProto-Italic.woff2",
    weight:"400",
    },
  ],
  variable: "--font-xProto",
});
export const metadata: Metadata = {
  title: "Rayen Benbetaieb",
  description: "Rayen Benbetaieb Portfolio" 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'${xProto.variable}'}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
