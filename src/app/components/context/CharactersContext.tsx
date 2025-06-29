"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

import { Character, fetchCharacters } from "@/repositories/characterRepository";

interface CharactersContextProps {
  characters: Character[];
  loadCharacters: () => Promise<void>;
}

const CharactersContext = createContext<CharactersContextProps | undefined>(
  undefined
);

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersProvider: FC<CharactersProviderProps> = ({
  children,
}): React.JSX.Element => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const loadCharacters = async (): Promise<void> => {
    const data = await fetchCharacters(1); // página 1
    setCharacters(data.results);
  };

  return (
    <CharactersContext.Provider value={{ characters, loadCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = (): CharactersContextProps => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error("useCharacters must be used within a CharactersProvider");
  }
  return context;
};
