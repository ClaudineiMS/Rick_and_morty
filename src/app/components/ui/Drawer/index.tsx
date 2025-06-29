"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

import CharactersList from "@/app/components/ui/Drawer/Characters/charactersList";

export default function TemporaryDrawer(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const toggleDrawer =
    (newOpen: boolean): (() => void) =>
    () => {
      setOpen(newOpen);
    };

  const navigateTo = (path: string): void => {
    setOpen(false);
    router.push(path);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <CharactersList navigateTo={navigateTo} />
      <Divider />
      {/* <PlanetsList toggleDrawer={toggleDrawer} navigateTo={navigateTo} />
      <Divider />
      <EpisodesList toggleDrawer={toggleDrawer} navigateTo={navigateTo} /> */}
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
