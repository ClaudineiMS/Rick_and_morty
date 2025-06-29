"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PublicIcon from "@mui/icons-material/Public";

interface PlanetsListProps {
  navigateTo: (path: string) => void;
}

export default function PlanetsList({
  navigateTo,
}: PlanetsListProps): React.JSX.Element {
  function handleClick(): void {
    navigateTo("/planets");
  }

  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          PLANETAS
        </ListSubheader>
      }
      sx={{ width: 250 }}
    >
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Ver todos os planetas" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
