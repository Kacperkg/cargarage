import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";
import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/app/_components/app-sidebar";
import SidebarTriggerComponent from "./_components/sidebar-trigget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Garage",
  description: "Your all in one for cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <SidebarProvider>
            <AppSidebar />
            <TRPCReactProvider>
              <div className="flex w-full flex-col">
                <SidebarTriggerComponent />
                {children}
              </div>
            </TRPCReactProvider>
          </SidebarProvider>
        </ClerkProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
