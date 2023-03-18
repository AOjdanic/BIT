import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users.js";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
function App() {
  const users = [
    {
      name: "petros",
      email: "petros.bitzer@example.com",
      birthDate: "1954-05-09T06:36:09Z",
      image: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
      imageMed: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      name: "arturo",
      email: "arturo.ibañez@example.com",
      birthDate: "1954-11-06T12:22:31Z",
      image: " https://randomuser.me/api/portraits/thumb/men/55.jpg",
      imageMed: " https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "brad",
      email: "brad.newman@example.com",
      birthDate: "1973-12-01T17:18:31Z",
      image: "  https://randomuser.me/api/portraits/thumb/men/31.jpg",
      imageMed: "  https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: " jasmine",
      email: "jasmine.white@example.com",
      birthDate: "1992-07-06T19:11:03Z",
      image: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
      imageMed: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "alessia",
      email: "alessia.vanderbeek@example.com",
      birthDate: "1948-01-16T11:23:24Z",
      image: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
      imageMed: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    {
      name: "kaylee",
      email: "kaylee.perkins@example.com",
      birthDate: "1959-02-02T08:41:21Z",
      image: "https://randomuser.me/api/portraits/thumb/women/93.jpg",
      imageMed: "https://randomuser.me/api/portraits/women/93.jpg",
    },
  ];

  return (
    <div className="App">
      <Header />
      {/* <Users users={users} /> */}
      <Cards users={users} />
      <Footer />
    </div>
  );
}
export default App;
