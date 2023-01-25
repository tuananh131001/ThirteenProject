/* eslint-disable @next/next/no-head-element */
import "./global.css";
import Container from "@/components/Container";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body>
        <Providers>
          {" "}
          <Container>{children} </Container>
        </Providers>
      </body>
    </html>
  );
}
