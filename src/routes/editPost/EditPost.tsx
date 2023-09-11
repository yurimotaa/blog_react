import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TPostUpdate } from "../../interfaces/posts.interfaces";
import { updatePostSchema } from "../../schemas/posts.schemas";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/postsContexts";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { editPost } = useContext(PostsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPostUpdate>({
    resolver: zodResolver(updatePostSchema),
  });

  const handleFormSubmit = (data: TPostUpdate) => {
    editPost(data, id, navigate);
  };

  return (
    <div className="new-post">
      <h2>Editar Post</h2>
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
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditPost;
