import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { PostsContext } from "../../contexts/postsContexts";
import "./Home.css";

const Home = () => {
  const { getPosts, posts } = useContext(PostsContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Posts</h1>
      {posts.length === 0 ? (
        <p>CArregando</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={crypto.randomUUID()}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
