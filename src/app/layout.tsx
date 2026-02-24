import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carl Vincent G. Platil - UI/UX Designer & Front-End Developer",
  description: "Portfolio of Carl Vincent G. Platil, a passionate UI/UX designer with a deep focus on creating intuitive, user-centered digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
