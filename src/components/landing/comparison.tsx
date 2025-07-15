import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Check, Minus } from "lucide-react";

const features = [
  { feature: "Contact Management", basic: true, pro: true, enterprise: true },
  { feature: "Email Automation", basic: true, pro: true, enterprise: true },
  { feature: "Lead Scoring", basic: false, pro: true, enterprise: true },
  { feature: "Sales Analytics", basic: false, pro: true, enterprise: true },
  { feature: "Custom Reporting", basic: false, pro: false, enterprise: true },
  { feature: "API Access", basic: false, pro: false, enterprise: true },
  { feature: "Dedicated Support", basic: false, pro: false, enterprise: true },
];

const CheckIcon = () => <Check className="h-5 w-5 text-accent" />;
const MinusIcon = () => <Minus className="h-5 w-5 text-muted-foreground" />;

export function Comparison() {
  return (
    <section id="comparison" className="w-full bg-muted py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Find the Right Plan for You</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Compare our plans and choose the one that best fits your business goals.
          </p>
        </div>
        <div className="mt-12 overflow-x-auto">
          <Table className="w-full min-w-[600px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-2/5">Feature</TableHead>
                <TableHead className="text-center">Basic</TableHead>
                <TableHead className="text-center">Pro</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((item) => (
                <TableRow key={item.feature}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">{item.basic ? <CheckIcon /> : <MinusIcon />}</TableCell>
                  <TableCell className="text-center">{item.pro ? <CheckIcon /> : <MinusIcon />}</TableCell>
                  <TableCell className="text-center">{item.enterprise ? <CheckIcon /> : <MinusIcon />}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
