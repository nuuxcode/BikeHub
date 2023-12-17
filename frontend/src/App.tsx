import Header from "./components/header/header.component";
import { Toaster } from "react-hot-toast";
import { Routes } from "./routes/routes";
import "./index.css";
import { useEffect } from 'react';
import Footer from "./components/footer/footer.component";
import ButtonScroll from "./components/home/buttonScroll.component";

function App() {
  function ScrollToSection() {
    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, []);
    return null;
  }
  return (
    <div className="h-screen">
      <ScrollToSection />
      <Header />
      <Routes />
      <Footer />
      <Toaster />
      <ButtonScroll />
    </div>
  );
}

export default App;
