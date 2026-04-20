import type { ReactNode } from "react";
import { ChatFab } from "@/components/ChatFab";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { TopBar } from "@/components/TopBar";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <SiteFooter />
      <ChatFab />
    </>
  );
}
