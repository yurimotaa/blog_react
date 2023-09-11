import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { PostsContext } from "../../contexts/postsContexts";
import "./Admin.css";

const Admin = () => {
  const { posts, getPosts, deletePost } = useContext(PostsContext);

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
