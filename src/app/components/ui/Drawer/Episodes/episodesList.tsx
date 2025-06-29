"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface EpisodesListProps {
  navigateTo: (path: string) => void;
}

export default function EpisodesList({
  navigateTo,
}: EpisodesListProps): React.JSX.Element {
  function handleClick(): void {
    navigateTo("/episodes");
  }

  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          EPISÓDIOS
        </ListSubheader>
      }
      sx={{ width: 250 }}
    >
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary="Ver todos os episódios" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
