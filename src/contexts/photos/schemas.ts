import { z } from 'zod'

export const photoNewFromSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório" }).max(255),
  file: z.instanceof(FileList).refine(file => file.length > 0, {
    message: "Compo obrigatório."
  }),
  albumsIds: z.array(z.string().uuid()).optional()
})

//transformando em uma tipagem
export type PhotoNewFormSchema = z.infer<typeof photoNewFromSchema>