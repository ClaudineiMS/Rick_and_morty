"use client";

import Image from "next/image";
import Box from "@mui/material/Box";

import img from "@/app/components/logo/r_and_m.png";

export default function Home(): React.JSX.Element {
  return (
    <Box
      sx={{
        width: "100%",
        height: "96vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <Image
        src={img}
        alt="Rick and Morty Logo"
        width={1000}
        height={1000}
        priority
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100vh",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}
