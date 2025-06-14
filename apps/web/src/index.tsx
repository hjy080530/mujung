import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './styles/tailwind.css'
import LinkButton from "./components/LinkButton.tsx";

function App() {
    return(
        <>
            <LinkButton />
        </>
    );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);