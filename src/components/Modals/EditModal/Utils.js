import { z } from "zod";

export const validador = z.object({
  name: z
    .string()
    .max(200, { message: "Limite máximo de caracteres alcançado!" })
    .optional(),
  img_URL: z
    .string()
    .max(200, { message: "Limite máximo de caracteres alcançado!" })
    .optional(),

  description: z
    .string()
    .max(200, { message: "Limite máximo de caracteres alcançado!" })
    .optional(),
});
