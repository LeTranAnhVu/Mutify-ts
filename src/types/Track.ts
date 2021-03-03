import { Genre } from "@/types/Genres";

export interface Track {
  id: number;
  name: string;
  url?: string;
  genres: Genre[];
}
