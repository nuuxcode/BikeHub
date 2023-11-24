import Header from "./components/header/header.component";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { Routes } from "./routes/routes";
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
