import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PrimeReactProvider>,
);
