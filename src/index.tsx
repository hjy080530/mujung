/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from "react";
import { createRoot } from "react-dom/client";
import font from "./styles/fonts";
import './index.css';
function App() {
    return <h1 css={font.H1}>안녕</h1>;
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);