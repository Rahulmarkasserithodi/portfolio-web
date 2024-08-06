import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Rahul Markasserithodi",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link href="https://v1.fontapi.ir/css/SFProDisplay" rel="stylesheet" />
        <link rel="icon" type="image/png" href=".public/imgs/favicon.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
