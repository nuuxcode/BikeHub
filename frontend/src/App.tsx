import Header from "./components/header/header.component";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Routes } from "./routes/routes";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="h-screen">
        <Header />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
