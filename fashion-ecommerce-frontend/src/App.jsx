import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRoutes from "./routes/CustomerRoutes.jsx";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          {/* for user */}
          <Route path="/*" element={<CustomerRoutes />} />
          {/* for admin */}
        </Routes>
      </div>
    </>
  );
}

export default App;
