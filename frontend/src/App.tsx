import Header from "./components/header/header.component";
import "./index.css";
import { Routes } from "./routes/routes";
function App() {
  return (
    <div className="h-screen">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
