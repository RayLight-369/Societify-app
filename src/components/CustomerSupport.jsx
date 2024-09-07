import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const CustomerSupport = () => {
  return (
    <div className="flex flex-col items-center justify-center p-7">
      <div className="flex w-full items-center justify-between pb-7">
        <h1 className="p-3 text-3xl font-bold">Customer Support</h1>
      </div>
      <Table>
        <TableCaption>Recent Messages</TableCaption>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead className="text-left">Customers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className={`cursor-pointer`}>
            <TableCell className="">
              <div className="flex items-center justify-between space-x-2">
                <span>John Doe</span>
                <Badge>1 unread</Badge>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default CustomerSupport;
