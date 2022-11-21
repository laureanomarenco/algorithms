import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Palindrome from './components/Palindrome';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/palindrome"
          element={<Palindrome />}
        />
      </Routes>
    </BrowserRouter>

  );
}
