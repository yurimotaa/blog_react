import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TDataPost } from "../../interfaces/posts.interfaces";
import { dataPostSchema } from "../../schemas/posts.schemas";
import { useContext } from "react";
import { PostsContext } from "../../contexts/postsContexts";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const { createPost } = useContext(PostsContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDataPost>({
    resolver: zodResolver(dataPostSchema),
  });

  const handleFormSubmit = (data: TDataPost) => {
    createPost(data, navigate);
  };

  return (
    <div className="new-post">
      <h2>Crie um novo post</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            id="title"
            placeholder="Digite o título"
            {...register("title")}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            id="body"
            placeholder="Digite o conteúdo"
            {...register("body")}
          ></textarea>
          {errors.body && <p>{errors.body.message}</p>}
        </div>
        <button type="submit" className="btn">
          Criar
        </button>
      </form>
    </div>
  );
};

export default NewPost;
