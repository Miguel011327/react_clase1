import { Carrousel } from "./components/Carrousel";
import { NavBar } from "./components/NavBar";
import { List } from "./components/List";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
      <NavBar />
      <Carrousel />
      <List />
    </div>
  );
}

export default App;
