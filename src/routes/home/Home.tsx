import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import blogUrl from "../../axios/config";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

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
