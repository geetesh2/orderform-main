import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderForm from "./pages/OrderForm";
import OrderTable from "./pages/ordertable";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<OrderForm />} />
          <Route path="/order" element={<OrderTable />} />
        </Routes>
      </div>
    </Router>
  );
}