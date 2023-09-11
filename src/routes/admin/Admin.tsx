import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import blogUrl from "../../axios/config";
import { toast } from "react-toastify";
import { IPost } from "../../interfaces/posts.interfaces";
import "./Admin.css";

const Admin = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = async () => {
    try {
      const response = await blogUrl.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id: number) => {
    await blogUrl.delete(`/posts/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);

    toast.success("Post excluído");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={crypto.randomUUID()}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link to={`/posts/edit/${post.id}`} className="btn edit-btn">
                Editar Post
              </Link>
              <button
                onClick={() => deletePost(post.id)}
                className="btn delete-btn"
              >
                Excluir Post
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
