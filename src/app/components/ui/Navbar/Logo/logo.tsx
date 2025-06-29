"use client";

import Box from "@mui/material/Box";
import Image from "next/image";

import georadarImg from "@/app/components/ui/Navbar/img/giphy_s.gif";

export default function Logo(): React.JSX.Element {
  return (
    <Box
      sx={{
        width: 80,
        height: 56,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "8px",
      }}
    >
      <Image
        src={georadarImg}
        alt="Logo"
        width={70}
        height={70}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
