import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface episodesListProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function episodesList({
  toggleDrawer,
}: episodesListProps): React.JSX.Element {
  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          EPISÓDIOS
        </ListSubheader>
      }
      onClick={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary="Ver todos os episódios" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
