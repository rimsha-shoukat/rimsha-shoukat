import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "rimsha-shoukat",
  description: "Personal portfolio website of Rimsha Shoukat",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
