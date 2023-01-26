"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

interface NavItemType {
  href: string;
  text: string;
}
interface Props {
  children: React.ReactNode;
}

export default function Container(props: Props) {

  // After mounting, we have access to the theme

  const { children } = props;

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
