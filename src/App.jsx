import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import PenyelenggaraLayout from "./components/PeyelenggaraLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="penyelenggara/dashboard"
            element={<PenyelenggaraLayout type={"dashboard"} />}
          />
          <Route
            path="penyelenggara/register-webinar"
            element={<PenyelenggaraLayout type={"register-webinar"} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
