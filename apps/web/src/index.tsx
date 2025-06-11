import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
    return <h1 className="text-3xl font-bold ">안녕</h1>;
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);