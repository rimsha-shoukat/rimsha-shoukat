import "./globals.css";

export const metadata = {
  title: "rimsha-shoukat",
  description: "Personal portfolio website of Rimsha Shoukat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
