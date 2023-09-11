import { z } from "zod";
import {
  createPostSchema,
  dataPostSchema,
  requestPostSchema,
  updatePostSchema,
} from "../schemas/posts.schemas";

type IPost = z.infer<typeof createPostSchema>;

type TPostRequest = z.infer<typeof requestPostSchema>;

type TPostUpdate = z.infer<typeof updatePostSchema>;

type TDataPost = z.infer<typeof dataPostSchema>;

export type { IPost, TPostRequest, TDataPost, TPostUpdate };
