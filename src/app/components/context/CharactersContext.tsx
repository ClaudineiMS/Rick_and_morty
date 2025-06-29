"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

import { Character, fetchCharacters } from "@/repositories/characterRepository";

interface CharactersContextProps {
  characters: Character[];
  page: number;
  loadCharacters: (page?: number) => Promise<void>;
  nextPage: () => void;
  prevPage: () => void;
}

const CharactersContext = createContext<CharactersContextProps | undefined>(
  undefined
);

export const CharactersProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  const loadCharacters = useCallback(
    async (pageNumber: number = page) => {
      const data = await fetchCharacters(pageNumber);
      setCharacters(data.results);
      setPage(pageNumber);
    },
    [page]
  );

  const nextPage = (): void => {
    loadCharacters(page + 1);
  };

  const prevPage = (): void => {
    if (page > 1) {
      loadCharacters(page - 1);
    }
  };

  return (
    <CharactersContext.Provider
      value={{ characters, page, loadCharacters, nextPage, prevPage }}
    >
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
