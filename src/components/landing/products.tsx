import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Briefcase, Building } from "lucide-react";

const products = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Basic Automation",
    description: "Perfect for startups and small teams looking to automate their essential sales tasks and workflows.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Pro Automation",
    description: "Ideal for growing businesses that need advanced features, integrations, and scalability.",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Enterprise Automation",
    description: "Comprehensive solutions for large organizations requiring custom workflows and dedicated support.",
  },
];

export function Products() {
  return (
    <section id="products" className="w-full py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">One Platform, Endless Possibilities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We offer tailored solutions to fit your business needs, no matter the size or industry.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product.title} className="text-center transition-transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4">
                  {product.icon}
                </div>
                <CardTitle className="font-headline text-xl pt-4">{product.title}</CardTitle>
                <CardDescription className="pt-2">{product.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
