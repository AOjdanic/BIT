import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import About from "./pages/About";
import Root from "./pages/Root";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/authors", element: <Authors /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
