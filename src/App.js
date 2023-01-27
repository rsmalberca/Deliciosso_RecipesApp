import Categories from "./Components/Categories";
import SearchBar from "./Components/SearchBar";
import Pages from "./Pages/Pages";
import { Logo, Nav } from "./Components/reusable_components";
import { GiForkKnifeSpoon } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Nav>
        <Logo to={"/"}>
          {" "}
          <GiForkKnifeSpoon />
          Deliciosso
        </Logo>
        <div>Made with ❤ by Renzo San Martin</div>
      </Nav>
      <SearchBar />
      <Categories />
      <Pages />
    </div>
  );
}

export default App;
