import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogUrl from "../../axios/config";
import { IPost } from "../../interfaces/posts.interfaces";

const Post = () => {
  const [post, setPost] = useState<IPost>({} as IPost);
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogUrl.get(`posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
