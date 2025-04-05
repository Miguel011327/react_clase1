import { Menu } from "./components/Menu";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
      <NavBar />
      <Menu />
    </div>
  );
}

export default App;
