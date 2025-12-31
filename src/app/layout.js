import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "rimsha-shoukat",
  description: "Personal portfolio website of Rimsha Shoukat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
