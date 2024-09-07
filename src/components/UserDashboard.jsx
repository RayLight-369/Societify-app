import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import useBills from "@/hooks/useBills";
import { userValidationSchema } from "@/validations/user";
import { useUser } from "@/Contexts/IsAuthenticated";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { bills } = useBills();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-7">
      <div className="flex w-full items-center justify-between pb-7">
        <h1 className="p-3 text-3xl font-bold">User Dashboard</h1>
      </div>
      <Table>
        <TableCaption> Recent Bills </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Due Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bills
            .filter((bill) => bill.email === user.email)
            .map((bill) => {
              return (
                <TableRow
                  className={
                    bill?.status
                      ? "bg-green-100 cursor-pointer hover:bg-green-200"
                      : "bg-red-100 hover:bg-red-200 cursor-pointer"
                  }
                >
                  <TableCell>{bill?.dueDate}</TableCell>
                  <TableCell>{bill?.amount}</TableCell>
                  <TableCell
                    className={
                      !bill?.status ? "text-red-500" : "text-green-500"
                    }
                  >
                    {!bill?.status ? "Unpaid" : "Paid"}
                  </TableCell>
                  <TableCell>
                    <div onClick={() => navigate(`/bill/${bill._id}`)}>
                      <Button variant={"outline"}>Download</Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};
export default UserDashboard;
