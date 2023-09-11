import { useNavigate } from "react-router-dom";
import blogUrl from "../../axios/config";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TPostUpdate } from "../../interfaces/posts.interfaces";
import { updatePostSchema } from "../../schemas/posts.schemas";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const editPost = async (data: TPostUpdate) => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPostUpdate>({
    resolver: zodResolver(updatePostSchema),
  });

  const handleFormSubmit = (data: TPostUpdate) => {
    editPost(data);
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
