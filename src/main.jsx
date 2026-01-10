import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/home/index.jsx";
//import PeoplePage from "./pages/people/index.jsx";

import CommunistPage from "./pages/communist/index.jsx";
import ApplicationPage from "./pages/application/index.jsx";
import Header from "./components/layout/header.jsx";
import AIPage from "./pages/ai/index.jsx";
import AiUsagePage from "./pages/ai-usage/index.jsx";
import InformationsPage from "./pages/informations/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/trang-chu" element={<HomePage />} />

        {/* Nội dung chính */}
        <Route path="/qua-trinh-ra-doi" element={<CommunistPage />} />
        <Route path="/ai-chatbot" element={<AIPage />} />
        <Route path="/van-dung" element={<ApplicationPage />} />
        <Route path="/ai-usage" element={<AiUsagePage />} />
        <Route path="/informations" element={<InformationsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
