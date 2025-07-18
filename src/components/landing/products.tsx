import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Briefcase, Building } from "lucide-react";

const products = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Mony",
    description: "Mony es tu asistente financiero por WhatsApp.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Asistente de Ventas",
    description: "Deja que tus clientes sean atendidos por tu IA, mientras tú te enfocas en crecer.",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Automatización Empresarial",
    description: "Soluciones integrales para grandes organizaciones que requieren flujos de trabajo personalizados y soporte dedicado.",
  },
];

export function Products() {
  return (
    <section id="products" className="w-full py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Descubre nuestros productos y servicios</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Creamos soluciones con IA que son simples para ti, para ayudarte a cumplir tus objetivos.
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
