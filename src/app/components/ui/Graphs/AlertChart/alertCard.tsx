"use client";

import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Chart } from "react-google-charts";

interface AlertCardProps {
  title: string;
  count: number;
  previousCount: number;
  isHighRes: boolean;
}

export default function AlertCard({
  title,
  count,
  previousCount,
  isHighRes,
}: AlertCardProps): React.JSX.Element {
  const data = [
    ["Status", "Quantidade"],
    ["Anterior", previousCount],
    ["Atual", count],
  ];

  const options = {
    pieHole: 0.9,
    legend: "none",
    colors: ["#f44336", "#4caf50"],
    chartArea: { width: "100%", height: "100%" },
    tooltip: { trigger: "none" },
    enableInteractivity: false,
  };

  const percentage = Math.round((count / (count + previousCount)) * 100);

  return (
    <Box
      width={{ xs: "100%", sm: "48%", md: "49%", lg: "24%", xl: "24%" }}
      sx={
        isHighRes
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          : {}
      }
    >
      <Box
        sx={{
          maxWidth: 450,
          minWidth: 250,
        }}
      >
        <Card
          sx={{
            width: "100%",
            p: 2,
            border: "1px solid #ccc",
            borderRadius: "10px",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "#999",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                position: "relative",
                width: 110,
                height: 110,
                flexShrink: 0,
              }}
            >
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width="100%"
                height="100%"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {`${percentage}%`}
              </Box>
            </Box>

            <Box sx={{ minWidth: 150 }}>
              <Typography color="text.secondary">{title}</Typography>
              <Typography variant="h5" component="div">
                {count}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
