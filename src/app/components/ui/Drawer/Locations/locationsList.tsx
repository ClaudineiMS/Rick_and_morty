import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface locationsListProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function locationsList({
  toggleDrawer,
}: locationsListProps): React.JSX.Element {
  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          LOCALIZAÇÕES
        </ListSubheader>
      }
      onClick={toggleDrawer(false)}
      sx={{ width: 250 }}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Ver todos os locais" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
