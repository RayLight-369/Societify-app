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

const UserDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-7">
      <div className="flex w-full items-center justify-between pb-7">
        <h1 className="p-3 text-3xl font-bold">User Dashboard</h1>
      </div>
      <Table>
        <TableCaption> Recent Bills </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Invoice</TableHead>
            <TableHead className="text-left">Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className={true ? "bg-green-100" : "bg-red-100"}>
            <TableCell>INV-001</TableCell>
            <TableCell>1234</TableCell>
            <TableCell>12/12/2021</TableCell>
            <TableCell className={!true ? "text-red-500" : "text-green-500"}>
              {!true ? "Unpaid" : "Paid"}
            </TableCell>
            <TableCell>
              <Button variant={"outline"}>Download</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default UserDashboard;
