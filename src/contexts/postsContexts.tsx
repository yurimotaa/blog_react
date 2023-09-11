import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";
import { IPost, TDataPost, TPostUpdate } from "../interfaces/posts.interfaces";
import blogUrl from "../axios/config";

export interface IDefaultProps {
  children: ReactNode;
}

interface IPostsContext {
  getPosts: () => Promise<void>;
  createPost: (data: TDataPost, navigate: any) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
  editPost: (data: TPostUpdate, id: any, navigate: any) => Promise<void>;
  posts: IPost[];
}

export const PostsContext = createContext({} as IPostsContext);

export const PostsContextProvider = ({ children }: IDefaultProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = async () => {
    try {
      const response = await blogUrl.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (data: TDataPost, navigate: any) => {
    try {
      const postData = {
        ...data,
        userId: 1,
      };

      await blogUrl.post("/posts", {
        body: postData,
      });

      toast.success("Post criado");

      navigate("/");
    } catch (error) {
      console.error("Erro ao criar o post:", error);
      toast.error("Erro ao criar o post");
    }
  };

  const deletePost = async (id: number) => {
    await blogUrl.delete(`/posts/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);

    toast.success("Post excluído");
  };

  const editPost = async (data: TPostUpdate, id: any, navigate: any) => {
    try {
      const postData = {
        ...data,
        userId: 1,
      };

      await blogUrl.put(`/posts/${id}`, {
        body: postData,
      });

      toast.success("Post editado");

      navigate("/");
    } catch (error) {
      console.error("Erro ao editar o post:", error);
      toast.error("Erro ao editar o post");
    }
  };

  return (
    <PostsContext.Provider
      value={{ getPosts, createPost, deletePost, editPost, posts }}
    >
      {children}
    </PostsContext.Provider>
  );
};
