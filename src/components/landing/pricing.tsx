import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Basic",
    price: "$40.000",
    description: "Plan individual.",
    features: [
      "Hasta 1500 interacciones/mes",
      "Hasta 50 productos",
      "Reporte de ventas",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$100.000",
    description: "Para negocios en crecimiento",
    features: [
      "Hasta to 5000 interacciones/mes",
      "Hasta 150 productos",
      "Reporte de ventas",
      "Soporte priorizado",
    ],
    isPopular: true,
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    description: "Para operaciones a gran escala large-scale operations.",
    features: [
      "+5000 interacciones",
      "Estudio de caso",
      "Integraciones personalizadas",
      "Reporte de ventas",
      "Ingeniero de soporte",
      // "",
    ],
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-muted py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Precios simples y claros</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Elige el plan que se ajusta a ti.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={cn("flex flex-col", tier.isPopular && "border-primary shadow-lg")}>
              {tier.isPopular && (
                <div className="py-1.5 px-4 bg-primary text-center text-sm font-semibold text-primary-foreground rounded-t-lg">Más Popular</div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.name !== "Enterprise" && <span className="text-muted-foreground">/mes</span>}
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.isPopular ? "default" : "outline"}>
                  {tier.name === "Enterprise" ? "Contact Sales" : "Empezar"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
