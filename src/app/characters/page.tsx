"use client";

import { CharactersProvider } from "@/app/components/context/CharactersContext";
import Pagekesleton from "@/app/components/ui/CharactersCards";

export default function CharactersList(): React.JSX.Element {
  return (
    <CharactersProvider>
      <Pagekesleton />
    </CharactersProvider>
  );
}
