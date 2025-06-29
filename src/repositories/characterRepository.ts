import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  [key: string]: unknown;
}

export interface PaginatedCharacters {
  results: Character[];
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export async function fetchCharacters(
  page: number = 1
): Promise<PaginatedCharacters> {
  const response = await axios.get<PaginatedCharacters>(
    `${BASE_URL}?page=${page}`
  );
  return response.data;
}
