import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, TrendingUp, PiggyBank, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "Registro de Gastos e Ingresos",
    description: "Añade tus transacciones diarias de forma rápida y sencilla directamente desde WhatsApp.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Presupuestos Inteligentes",
    description: "Define tus presupuestos por categoría y recibe alertas para no excederte en tus gastos.",
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "Metas de Ahorro",
    description: "Establece tus objetivos financieros y Mony te ayudará a alcanzarlos con un seguimiento constante.",
  },
];

export default function MonyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl">
            ¿Qué es Mony?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
          Mony es tu asistente financiero personal, diseñado para personas reales como tú, que quieren organizar su dinero sin complicarse.
          Olvida las hojas de Excel y las aplicaciones complicadas. Con Mony, solo necesitas WhatsApp para registrar tus ingresos y gastos en segundos, usando texto, audio o foto.
          </p>
          {/* <Button asChild size="lg" className="mt-8">
            <Link href="/#pricing">
              Empezar con Mony <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button> */}
        </div>
      </section>
      
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-4xl font-extrabold">Mony</h2>
                    <p className="mt-4 text-muted-foreground">Tu Asistente Financiero.</p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                            <span><strong> Controla tus gastos:</strong> como si hablaras con un amigo, por texto, audio y fotos.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                            <span><strong>Solo necesitas WhatsApp.</strong> sin aplicaciones ni herramientas complicadas.   </span>
                        </li>
                        <li className="flex items-start">
                             <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                            <span><strong>Reportes dinamicos:</strong> Revisa tus movimientos en un reporte dinamico que te permitira llevar el control y seguimiento de tus gastos. </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <Image
                        src="https://placehold.co/800x600.png"
                        alt="Mony financial assistant chat interface"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="financial mobile app"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold">Funcionalidades Clave</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Todo lo que necesitas para tomar el control de tus finanzas.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-primary/10 p-4">{feature.icon}</div>
                  <CardTitle className="font-headline pt-4 text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
