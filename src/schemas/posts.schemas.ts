import { z } from "zod";

const createPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

const requestPostSchema = createPostSchema.omit({ id: true });

const dataPostSchema = createPostSchema.omit({ id: true, userId: true });

export { createPostSchema, requestPostSchema, dataPostSchema };
