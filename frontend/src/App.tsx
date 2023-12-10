import Header from "./components/header/header.component";
import { Toaster } from "react-hot-toast";
import { Routes } from "./routes/routes";
import "./index.css";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Routes />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
