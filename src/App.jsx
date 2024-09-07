import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import IsAuthenticated from "./Contexts/IsAuthenticated";

const App = () => {
  return (
    <BrowserRouter>
      <ChildLayout />
    </BrowserRouter>
  );
};

const ChildLayout = () => {
  return (
    <IsAuthenticated>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" index element={<Home />} />
          <Route path="dashboard" index element={<Dashboard />} />
        </Route>
      </Routes>
    </IsAuthenticated>
  );
};

export default App;
