import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl text-center mx-auto">
          <p className="font-semibold text-primary">AAA</p>
          <p className="font-semibold text-primary">Automatizar. Acelerar. Alcanzar.</p>
          <h2 className="font-headline mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Tecnología Simple para Organizar tu dinero y Vender más.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            En ConfIA creamos asistentes y automatizaciones para personas y negocios que quieren crecer sin complicaciones.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#pricing">
                Elige tu plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#comparison">Compara</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-[10%] top-[15%] h-32 w-32 animate-float-1 rounded-full bg-primary/50 blur-2xl"></div>
        <div className="absolute right-[10%] top-[25%] h-48 w-48 animate-float-2 rounded-full bg-accent/50 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[20%] h-24 w-24 animate-float-2 rounded-full bg-primary/30 blur-2xl"></div>
        <div className="absolute bottom-[20%] right-[30%] h-36 w-36 animate-float-1 rounded-lg bg-accent/30 blur-3xl"></div>
      </div>
    </section>
  );
}
