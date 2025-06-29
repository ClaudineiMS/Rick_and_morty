"use client";

import Box from "@mui/material/Box";
import Image from "next/image";

import img from "@/app/components/ui/Navbar/img/giphy_s.gif";

export default function Logo(): React.JSX.Element {
  const handleClick = (): void => {
    window.location.reload();
  };
  return (
    <Box
      onClick={handleClick}
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
        src={img}
        alt="Logo"
        width={70}
        height={70}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
