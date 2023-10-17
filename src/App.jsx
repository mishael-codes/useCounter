import React from "react";
import Counter from "./components/counter";
import NotFound from "./components/pagenotfound";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
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
        <p className="text-2xl absolute bottom-12">
          Built with 💙 by <Link to={myUrl}>Mishael Enyi</Link>
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
