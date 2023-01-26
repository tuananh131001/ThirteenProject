'use client';
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Footer from "./Footer";

interface NavItemType {
  href: string;
  text: string;
}
function NavItem({ href, text }: NavItemType) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      }
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}
interface Props {
  children: React.ReactNode;
}

export default function Container(props: Props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const meta = {
    title: "Tuan Anh Nguyen – Software Engineering.",
    description: `Full-stack engineer, Tech enthusiast.`,
    type: "website",
    date: "22.11.2023",
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
     
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
      </main>
    </div>
  );
}
