import { z } from "zod";

const createPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

const requestPostSchema = createPostSchema.omit({ id: true });

const updatePostSchema = createPostSchema.omit({ id: true }).partial();

const dataPostSchema = createPostSchema.omit({ id: true, userId: true });

export {
  createPostSchema,
  requestPostSchema,
  dataPostSchema,
  updatePostSchema,
};
