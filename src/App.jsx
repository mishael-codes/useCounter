import React from "react";
import Counter from "./components/counter";
import NotFound from "./components/pagenotfound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const myUrl = "https://mishaelenyi.netlify.app"
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Counter />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
      <footer className="flex items-center justify-center">
        <p className="text-xs md:text-2xl absolute bottom-12">
          Built with 💙 by <a href={myUrl}>Mishael Enyi</a>
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
