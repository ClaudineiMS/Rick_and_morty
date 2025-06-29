"use client";

import { CharactersProvider } from "@/app/components/context/CharactersContext";
import Pagekeleton from "@/app/components/ui/Dashboard";

export default function CharactersList(): React.JSX.Element {
  return (
    <CharactersProvider>
      <Pagekeleton />
    </CharactersProvider>
  );
}
