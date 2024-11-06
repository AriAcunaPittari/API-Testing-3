import { z } from "zod";
export class Schemas {
  books = z.object({
    number: z.number(),
    title: z.string(),
    originalTitle: z.string(),
    releaseDate: z.string(),
    description: z.string(),
    pages: z.number(),
    cover: z.string(),
  });
  booksList = z.array(this.books);

  characters = z.object({
    fullName: z.string(),
    name: z.string(),
    nickname: z.string(),
    hogwartsHouse: z.string(),
    interpretedBy: z.string(),
    children: z.array(z.string()),
    image: z.string(),
    birthdate: z.string(),
  });
  charactersList = z.array(this.characters);

  houses = z.object({
    house: z.string(),
    emoji: z.string(),
    founder: z.string(),
    colors: z.array(z.string()),
    animal: z.string(),
  });
  housesList = z.array(this.houses);

  spells = z.object({
    spell: z.string(),
    use: z.string(),
  });
  spellsList = z.array(this.spells);
}
