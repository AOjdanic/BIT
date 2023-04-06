import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import About from "./pages/About";
import Root from "./pages/Root";
import "./App.css";
import SinglePost from "./pages/SinglePost";
import SingleAuthor from "./pages/SingleAuthor";
import NewPost from "./pages/NewPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/posts/:postid", element: <SinglePost /> },
      { path: "/posts/new", element: <NewPost /> },
      { path: "/authors", element: <Authors /> },
      { path: "/authors/:authorid", element: <SingleAuthor /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
