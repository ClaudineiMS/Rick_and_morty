"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";

import CharactersList from "./Characters/CharactersList";
import EpisodesList from "./Episodes/episodesList";
import Locations from "./Locations/locationsList";

export default function TemporaryDrawer(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean): (() => void) => {
    return () => {
      setOpen(newOpen);
    };
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <CharactersList toggleDrawer={toggleDrawer} />
      <Divider />
      <EpisodesList toggleDrawer={toggleDrawer} />
      <Divider />
      <Locations toggleDrawer={toggleDrawer} />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ mr: 2, color: "white" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
