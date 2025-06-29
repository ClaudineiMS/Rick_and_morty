"use client";

import * as React from "react";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const demoTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function DashboardSkeleton(): React.JSX.Element {
  const is2K = useMediaQuery("(min-width: 2560px)");
  const is4K = useMediaQuery("(min-width: 3840px)");
  const isHighRes = is2K || is4K;

  // const alertData = [
  //   { title: "Novos alertas", count: 433, previousCount: 58 },
  //   { title: "ACP's criadas no último mês", count: 59, previousCount: 80 },
  //   {
  //     title: "Quantidade de desmatamento por hectares",
  //     count: 150,
  //     previousCount: 77,
  //   },
  //   {
  //     title: "Terras de interesse federal atingidas",
  //     count: 12,
  //     previousCount: 35,
  //   },
  // ];

  return (
    <ThemeProvider theme={demoTheme}>
      <Box
        sx={{
          flexGrow: 1,
          p: 0.5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={2}
          columns={{ xs: 4, sm: 4, md: 2, lg: 4, xl: 4 }}
        >
          {/* {alertData.map((item, idx) => (
            <AlertCard key={idx} {...item} isHighRes={isHighRes} />
          ))}

          <Box
            width={{ xs: "100%", sm: "98%", md: "48%", lg: "49%", xl: "49%" }}
            height={isHighRes ? "75vh" : "64vh"}
          ></Box>

          <Box
            width={{ xs: "100%", sm: "98%", md: "48%", lg: "49%", xl: "49%" }}
            height={isHighRes ? "75vh" : "64vh"}
          >
            <DenseTable />
          </Box> */}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
