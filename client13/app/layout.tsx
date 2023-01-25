/* eslint-disable @next/next/no-head-element */
import './global.css';
import Container from "@/components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body>
        <Container>{children} </Container>
      </body>
    </html>
  );
}
