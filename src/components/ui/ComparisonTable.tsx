
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  manual: boolean;
  illustrator: boolean;
  reach: boolean;
  manualText?: string;
  illustratorText?: string;
  reachText?: string;
}

interface ComparisonTableProps {
  features: ComparisonItem[];
}

const ComparisonTable = ({ features }: ComparisonTableProps) => {
  const renderCell = (value: boolean | string | undefined) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-fashion-primary" />
      ) : (
        <X className="mx-auto h-5 w-5 text-gray-400" />
      );
    }
    
    if (typeof value === "string") {
      return value;
    }
    
    return null;
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px]">Feature</TableHead>
            <TableHead className="text-center">Manual Methods</TableHead>
            <TableHead className="text-center">Adobe Illustrator</TableHead>
            <TableHead className="text-center">REACH Fashion Studio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{feature.feature}</TableCell>
              <TableCell className="text-center">
                {renderCell(feature.manualText || feature.manual)}
              </TableCell>
              <TableCell className="text-center">
                {renderCell(feature.illustratorText || feature.illustrator)}
              </TableCell>
              <TableCell className="text-center">
                {renderCell(feature.reachText || feature.reach)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
