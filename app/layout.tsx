import { ReactNode } from "react";
import "./globals.css"


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className="bg-black">
      <head>
        <title>Hector Tatoo</title>

      </head>
      <body >
         <main>{children}</main>
      </body>
    </html>
  );
}