import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";
import blogUrl from "../../axios/config";
import { toast } from "react-toastify";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();

  const createPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogUrl.post("/posts", {
      body: post,
    });

    toast.success("Post criado");

    navigate("/");
  };
  return (
    <div className="new-post">
      <h2>Crie um novo post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
