import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Jejak Kediri — Sejarah & Budaya Panjalu", description: "Menyusuri jejak peradaban Panjalu hingga Kediri masa kini.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
