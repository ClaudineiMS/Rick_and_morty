import { Toolbar, Typography } from "@mui/material";
import React from "react";

export default function DashBoardToolbar(): React.JSX.Element {
  return (
    <Toolbar
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        bgcolor: "background.paper",
        boxShadow: 1,
        gap: { xs: 1, sm: 0 },
        p: { xs: 0.5, sm: 1 },
        minHeight: { xs: 40, sm: 48 },
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontSize: { xs: "1rem", sm: "1.25rem" },
          textAlign: { xs: "left", sm: "initial" },
        }}
      >
        {/* Quadro */}
      </Typography>
    </Toolbar>
  );
}
