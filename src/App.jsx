"use client";

import React from "react";
import Error from "./components/error";
import Counter from "./components/counter";
import NotFound from "./components/pagenotfound";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const myUrl = "https://mishaelenyi.netlify.app";
  return (
    <BrowserRouter>
      <main>
        <ErrorBoundary FallbackComponent={Error}>
          <Routes>
            <Route path="/" element={<Counter />}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </ErrorBoundary>
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
