import { useState, useEffect } from "react";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
function App() {
  const [stories, setStories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .then((res) => res.json())
      .then((idsArr) =>
        Promise.all(
          idsArr
            .slice(0, 10)
            .map((id) =>
              fetch(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
              ).then((res) => res.json())
            )
        )
      )
      .then((data) => {
        console.log(data);
        setStories(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {isLoading && <Spinner />}
      {!isLoading && <Header />}
      {!isLoading &&
        stories.map((story, i) => (
          <Article index={i + 1} key={story.id} data={story} />
        ))}
    </div>
  );
}

export default App;
