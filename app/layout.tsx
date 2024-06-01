import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forum App",
  description: "A forum app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-muted ${inter.className}`}>
        <div className="sticky top-0 w-full flex items-center h-20 border-b  z-40 bg-secondary">
          <h1 className="text-2xl font-bold text-primary text-center w-full">
            Forum App
          </h1>
        </div>
        {children}

        <footer className="bg-secondary text-primary text-center py-4">
          <p>&copy; {new Date().getFullYear()} Forum App</p>
        </footer>
      </body>
    </html>
  );
}
