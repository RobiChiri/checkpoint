import { App } from "./App";
import { createRoot } from "react-dom/client";

const appElement = <App />;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(appElement);
