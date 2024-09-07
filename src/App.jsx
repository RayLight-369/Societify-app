import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import IsAuthenticated from "./Contexts/IsAuthenticated";
import BillView from "./components/BillView";

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
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/bill/:id" element={<BillView />} />
        </Route>
      </Routes>
    </IsAuthenticated>
  );
};

export default App;
