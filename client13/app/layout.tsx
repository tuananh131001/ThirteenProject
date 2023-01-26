/* eslint-disable @next/next/no-head-element */
import "./global.css";
import Container from "@/components/Container";
import { Providers } from "./providers";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
            <SideBar /> <Container>{children} </Container>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
