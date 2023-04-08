import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function LayoutPage() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/users");
  }, []);
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <h1>CRUD</h1>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default LayoutPage;
