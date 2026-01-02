import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import PreviewPage from "./PreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
