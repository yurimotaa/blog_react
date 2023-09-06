import { useNavigate } from "react-router-dom";
import blogUrl from "../../axios/config";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TDataPost } from "../../interfaces/posts.interfaces";
import { dataPostSchema } from "../../schemas/posts.schemas";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const createPost = async (data: TDataPost) => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDataPost>({
    resolver: zodResolver(dataPostSchema),
  });

  const handleFormSubmit = (data: TDataPost) => {
    createPost(data);
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
