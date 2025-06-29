"use client";

import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import PrimarySearchAppBar from "@/app/components/ui/Navbar";
import { CharactersProvider } from "@/app/components/context/CharactersContext";

import DashboardSkeleton from "./components/ui/Dashboard";

function ContentWrapper({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  const isMobile = useMediaQuery("(max-width:600px)");
  const paddingTop = isMobile ? 56 : 64;

  return <div style={{ paddingTop }}>{children}</div>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppRouterCacheProvider>
          <PrimarySearchAppBar />
          <ContentWrapper>
            <CharactersProvider>
              <DashboardSkeleton />
            </CharactersProvider>
            {children}
          </ContentWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
