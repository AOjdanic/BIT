/*TODO
1)loading screen
2)error message
3)male/female
4)about page

*/

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useState } from "react";
function App() {
  const [isList, setIsList] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("isList") === "0") setIsList(false);
    else setIsList(true);
  }, []);
  return (
    <div className="App">
      <Header setIsList={setIsList} isList={isList} />
      <Main isList={isList} />
      <Footer />
    </div>
  );
}

export default App;
