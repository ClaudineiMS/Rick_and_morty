"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PersonIcon from "@mui/icons-material/Person";

interface CharactersListProps {
  navigateTo: (path: string) => void;
}

export default function CharactersList({
  navigateTo,
}: CharactersListProps): React.JSX.Element {
  const handleClick = (path: string) => (): void => {
    navigateTo(path);
  };

  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          PERSONAGENS
        </ListSubheader>
      }
      sx={{ width: 250 }}
    >
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick("characters")}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Ver lista de personagens" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
