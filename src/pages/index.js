import MailPage from "@/components/MailPage";
import React from "react";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const Home = () => {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <MailPage />
    </div>
  );
};

export default Home;
