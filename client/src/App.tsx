import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Navbar from "@/scenes/navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar/>
            <Routes>
              <Route path="/" element={<div>Dashboard</div>} />
              <Route path="/predictions" element={<>Predictions</>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App
