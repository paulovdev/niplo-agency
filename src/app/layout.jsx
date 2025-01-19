import LenisScrollProvider from "@/utils/lenis";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
