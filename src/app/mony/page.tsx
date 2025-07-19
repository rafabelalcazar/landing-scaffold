import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, TrendingUp, PiggyBank, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const features = [
  {
    // icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "💸 59 mil pesos",
    description: "🔥 Solo 10 cupos disponibles. 🗓 Hasta el 20 de julio. 💰 Ahorra 61 mil.",
  },
  {
    // icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "💸 89 mil pesos",
    description: "🔥 Solo 20 cupos disponibles.  🗓 Hasta el 28 de julio. 💰 Ahorra 31 mil.",
  },
  {
    // icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "💸 120 mil pesos",
    description: "🔥 Solo 30 cupos disponibles. 🗓 Hasta el 6 de agosto.",
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
              <a href="https://wa.me/573116270955?text=Hola%20quiero%20registrarme%20en%20Mony" target="_blank" >
                <Button className='my-8 w-full' >
                  Probar Gratis
                </Button>
              </a>

            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/rafabelalcazar/icons/refs/heads/main/img/mony-preview.png"
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
          <h2 className="font-headline text-4xl font-extrabold">Reto: Cambia tu Patrón de Dinero</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            🚀 30 días 🚀
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            📆 Inicio de clases: 6 de agosto.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
              <span>Checklist de actividades prácticas para organizar tu dinero. </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
              <span>Clases virtuales en vivo (finanzas personales + mentalidad de éxito). </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
              <span>Acceso a Mony PRO por 2 meses (ajustado a tus necesidades). </span>
            </li>
          </ul>
          <div>
            <p className="mt-4 text-lg text-muted-foreground">
              Participa en el Reto (Cupos Limitados):
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader className="items-center">
                  {/* <div className="rounded-full bg-primary/10 p-4">{feature.icon}</div> */}
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
      
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Conoce a tu Mentora
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 items-center">
              <div className="md:col-span-1 flex justify-center">
                  <Avatar className="h-48 w-48">
                      <AvatarImage src="https://raw.githubusercontent.com/rafabelalcazar/icons/refs/heads/main/img/valen.jpg" alt="Valentina Cifuentes" data-ai-hint="woman portrait professional" className='rounded-full object-cover' />
                      <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="font-headline text-2xl font-bold text-foreground">Valentina Cifuentes</h3>
                  <p className="text-md mt-1 font-semibold text-primary">Profesional en Finanzas</p>
                  <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "Transformar tu relación con el dinero es el primer paso hacia la libertad financiera. Estoy aquí para guiarte en cada paso del camino, con herramientas simples y un acompañamiento cercano para que alcances tus metas."
                  </blockquote>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
