import AdminDashboard from "../components/AdminDashboard";
import CustomerSupport from "../components/CustomerSupport";
import SupportChat from "../components/SupportChat";
import UserDashboard from "../components/UserDashboard";

function Dashboard() {
  let user = "support";

  if (user === "admin") {
    return <AdminDashboard />;
  } else if (user === "user") {
    return <UserDashboard />;
  }
  if (user === "support") {
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
