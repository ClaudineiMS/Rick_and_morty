"use client";

import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import PrimarySearchAppBar from "@/app/components/ui/Navbar";
import TemporaryDrawer from "@/app/components/ui/Drawer";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background:
            "radial-gradient(ellipse at top, #3a5076 0%, #1e2a47 100%)",
          color: "#fff",
          position: "relative",
        }}
      >
        <AppRouterCacheProvider>
          <PrimarySearchAppBar />
          <TemporaryDrawer />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
