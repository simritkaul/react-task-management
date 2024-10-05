import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import store from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
