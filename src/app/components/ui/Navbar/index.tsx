"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import TemporaryDrawer from "@/app/components/ui/Drawer/index";

import Logo from "./Logo/logo";

export default function PrimarySearchAppBar(): React.JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#0D0D0D" }}>
        <Toolbar sx={{ minHeight: 56, position: "relative" }}>
          <Box sx={{ position: "absolute", left: 0 }}>
            <TemporaryDrawer />
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Logo />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
