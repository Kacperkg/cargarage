import { mockCars } from "~/utils/data";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function FeaturedCards() {
  return (
    <Card className="bg-bg2 w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <h1 className="text-2xl text-white">Featured Cars</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="text-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Make</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Year</TableHead>
              <TableHead className="hidden md:table-cell">HP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCars.map((car, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{car.make}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell className="hidden md:table-cell">{car.hp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
