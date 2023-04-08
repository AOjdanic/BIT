import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import UsersPage from "./pages/UsersPage";
import SingleUserPage from "./pages/SingleUserPage";
import CreateUserPage from "./pages/CreateUserPage";
import EditUserPage from "./pages/EditUserPage";
import { useState } from "react";

function App() {
  const [createdUser, setCreatedUser] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        { path: "/users", element: <UsersPage passedUser={createdUser} /> },
        { path: "/users/:id", element: <SingleUserPage /> },
        { path: "/users/:id/edit", element: <EditUserPage /> },
        {
          path: "/users/create",
          element: <CreateUserPage onCreateUser={setCreatedUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
