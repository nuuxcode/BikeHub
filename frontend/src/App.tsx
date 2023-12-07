import Header from "./components/header/header.component";
import { Toaster } from "react-hot-toast";
import { Routes } from "./routes/routes";
import "./index.css";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;
