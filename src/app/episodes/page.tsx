"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function EpisodeList(): React.JSX.Element {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Episódios
      </Typography>
    </Container>
  );
}
