import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/layout/CustomCursor";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { LandingPage } from "./pages/LandingPage";
import { FormPage } from "./pages/FormPage";

function Landing() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/formulario" element={<FormPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
