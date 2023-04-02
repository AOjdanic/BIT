/*TODO
1)loading screen - just can't be done for some reason
*/

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import { useEffect, useState } from "react";
function App() {
  const [isList, setIsList] = useState(true);
  const [about, setAbout] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isList") === "0") setIsList(false);
    else setIsList(true);
  }, []);
  return (
    <div className="App">
      <Header onAboutClick={setAbout} setIsList={setIsList} isList={isList} />
      {about === false && <Main isList={isList} />}
      {about === true && <About />}
      <Footer />
    </div>
  );
}

export default App;
