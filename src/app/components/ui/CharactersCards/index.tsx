"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { useCharacters } from "@/app/components/context/CharactersContext";

const demoTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b0c2a",
      paper: "#1b1d3c",
    },
    primary: {
      main: "#7b5cff",
    },
    secondary: {
      main: "#00bcd4",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
  },
});

export default function Pagekesleton(): React.JSX.Element {
  const { characters, loadCharacters, nextPage, prevPage, page } =
    useCharacters();

  React.useEffect(() => {
    loadCharacters(page);
  }, [loadCharacters, page]);

  return (
    <ThemeProvider theme={demoTheme}>
      <Box
        sx={{
          flexGrow: 1,
          p: 0.5,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          marginTop: "2%",
        }}
      >
        <Grid
          container
          spacing={2}
          columns={{ xs: 4, sm: 4, md: 2, lg: 4, xl: 4 }}
          sx={{ flexGrow: 1 }}
        >
          {characters.map((char) => (
            <Box
              key={char.id}
              sx={{
                width: {
                  xs: "100%",
                  sm: "48%",
                  md: "48%",
                  lg: "23%",
                  xl: "24%",
                },
                mb: 2,
              }}
            >
              <Card
                sx={{
                  backgroundColor: "background.paper",
                  boxShadow: 6,
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="310"
                  image={char.image}
                  alt={char.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {char.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {char.species} - {char.status}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Grid>

        {/* Botões para navegar entre as páginas */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained" onClick={prevPage} disabled={page === 1}>
            Página Anterior
          </Button>
          <Button variant="contained" onClick={nextPage}>
            Próxima Página
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
