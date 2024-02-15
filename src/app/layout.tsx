import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/lib/auth/SessionContext";
import { validateRequest } from "@/lib/auth/lucia";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucia and next client-side session fetch example",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validateRequest();

  return (
    <html lang="en">
      <SessionProvider value={session}>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
