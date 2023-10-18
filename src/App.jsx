"use client";

import React from "react";
import NavBar from "./components/nav";
import Error from "./components/error";
import ErrorPage from "./components/errorPage";
import Counter from "./components/counter";
import NotFound from "./components/pagenotfound";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const myUrl = "https://mishaelenyi.netlify.app";
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Error}>
        <main className="h-[75vh] flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="flex items-center justify-center">
          <p className="text-xs md:text-lg absolute bottom-8">
            Built with 💙 by <a href={myUrl} className="text-orange-500 hover:underline underline-offset-1">Mishael Enyi</a>
          </p>
        </footer>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
