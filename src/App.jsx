import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login/Login";
import Schedule from "./page/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sinhvien" element={<Schedule role="sinhvien" />} />
          <Route path="/giangvien" element={<Schedule role="giangvien" />} />
          <Route path="/giaovukhoa" element={<Schedule role="giaovukhoa" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
