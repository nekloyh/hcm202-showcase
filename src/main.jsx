import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/home/index.jsx";
import Header from "./components/layout/Header.jsx";
import CommunistPage from "./pages/communist/index.jsx";
import ApplicationPage from "./pages/application/index.jsx";
import AIChatboxPage from "./pages/ai/index.jsx";
import AiUsagePage from "./pages/ai-usage/index.jsx";
import InformationsPage from "./pages/informations/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trang-chu" element={<HomePage />} />
        <Route path="/qua-trinh-ra-doi" element={<CommunistPage />} />
        <Route path="/van-dung" element={<ApplicationPage />} />
        <Route path="/ai-chatbot" element={<AIChatboxPage />} />
        <Route path="/ai-usage" element={<AiUsagePage />} />
        <Route path="/informations" element={<InformationsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
