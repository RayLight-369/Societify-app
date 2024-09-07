import { useUser } from "@/Contexts/IsAuthenticated";
import AdminDashboard from "../components/AdminDashboard";
import CustomerSupport from "../components/CustomerSupport";
import SupportChat from "../components/SupportChat";
import UserDashboard from "../components/UserDashboard";

function Dashboard() {
  const {user} = useUser();
  
  if (user.role === "admin") {
    return <AdminDashboard />;
  } else if (user.role === "resident") {
    return <UserDashboard />;
  }
  if (user.role === "customer-support") {
    return (
      <div>
        <CustomerSupport />
        <SupportChat />
      </div>
    );
  }
  return <></>;
}

export default Dashboard;
