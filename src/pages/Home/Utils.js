import { z } from "zod";

export const validadorInput = z.object({
  name: z
    .string({ required_error: "Insira um título" })
    .min(1, { message: "Preencha o campo título" })
    .max(255, { message: "Limite máximo de caracteres alcançado!" }),
  img_URL: z
    .string({ required_error: "Insira um URL de imagem" })
    .min(1, { message: "Preencha o campo imagem" })
    .max(255, { message: "Limite máximo de caracteres alcançado!" })
    .url({ message: "Insira um URL válido" }),

  description: z
    .string({ required_error: "Insira uma descrição" })
    .min(1, { message: "Preencha o campo descrição" })
    .max(255, { message: "Limite máximo de caracteres alcançado!" }),
  type: z.object({
    project: z.string().nonempty("Selecione um projeto."),
  }),
});
