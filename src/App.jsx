import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import PenyelenggaraLayout from "./components/PeyelenggaraLayout";

export default function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
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
      {/* <Footer /> */}
    </div>
  );
}
