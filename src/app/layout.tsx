import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "QuantumCore",
  description: "Welcome to QuantumCore - Shaping a quantum-powered tomorrow.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Set the default theme
          enableSystem // Enable system theme preference
          disableTransitionOnChange // Prevent flashing effect during theme change
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
