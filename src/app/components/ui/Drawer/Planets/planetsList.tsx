import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface planetstProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function planetsList({
  toggleDrawer,
}: planetstProps): React.JSX.Element {
  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          PLANETAS
        </ListSubheader>
      }
      onClick={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Ver todos os planetas" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
