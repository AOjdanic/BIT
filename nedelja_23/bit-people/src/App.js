import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";
function App() {
  const [isList, setIsList] = useState(true);
  return (
    <div className="App">
      <Header setIsList={setIsList} isList={isList} />
      <Main isList={isList} />
      <Footer />
    </div>
  );
}

export default App;
