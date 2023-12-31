import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/Home.tsx";
import NewPost from "./routes/newPost/NewPost.tsx";
import "./index.css";
import Post from "./routes/post/Post.tsx";
import Admin from "./routes/admin/Admin.tsx";
import EditPost from "./routes/editPost/EditPost.tsx";
import { PostsContextProvider } from "./contexts/postsContexts.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostsContextProvider>
      <RouterProvider router={router} />
    </PostsContextProvider>
  </React.StrictMode>
);
