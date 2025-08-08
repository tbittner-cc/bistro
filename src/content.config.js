import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const recipes = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/recipes" }),
});

export const collections = {recipes};
