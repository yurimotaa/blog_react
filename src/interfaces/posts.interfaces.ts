import { z } from "zod";
import {
  createPostSchema,
  dataPostSchema,
  requestPostSchema,
} from "../schemas/posts.schemas";

type IPost = z.infer<typeof createPostSchema>;

type TPostRequest = z.infer<typeof requestPostSchema>;

type TDataPost = z.infer<typeof dataPostSchema>;

export type { IPost, TPostRequest, TDataPost };
