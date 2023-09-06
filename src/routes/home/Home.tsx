import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import blogUrl from "../../axios/config";
import "./Home.css";
import { IPost } from "../../interfaces/posts.interfaces";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = async () => {
    try {
      const response = await blogUrl.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
