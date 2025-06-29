import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PeopleIcon from "@mui/icons-material/People";

interface CharactersProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function Characters({
  toggleDrawer,
}: CharactersProps): React.JSX.Element {
  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          PERSONAGENS
        </ListSubheader>
      }
      onClick={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Ver todos os personagens" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
