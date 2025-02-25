import { z } from "zod";

export const TrainModel = z.object({
  name: z.string(),
  type: z.enum(["Man", "Woman", "Others"]),
  age: z.number(),
  ethinicity: z.enum([
    "White",
    "Black",
    "Asian American",
    "East Asian",
    "South East Asian",
    "South Asian (Indian)",
    "Middle Eastern",
    "Pacific",
    "Hispanic",
  ]),
  eyeColor: z.enum(["Black", "Brown", "Hazel", "Gray"]),
  bald: z.boolean(),
  image: z.array(z.string()),
});

export const GenerateImage = z.object({
  prompt: z.string(),
  modelId: z.string(),
  nums: z.number(),
});

export const PackGeneratedImages = z.object({
  modelId: z.string(),
  packId: z.string(),
});
