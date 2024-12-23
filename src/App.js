import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Lagna from './components/lagan/Lagan';

function App() {

  return (
    <BrowserRouter basename='/tirthrajsinh-wedding'>
      <Routes>
        <Route index element={<Navigate to="/lagan" replace />} />
        <Route path="lagan" element={<Lagna />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
