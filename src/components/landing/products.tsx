"use client";

import React, { useRef, MouseEvent } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Briefcase, Building } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Mony",
    description: "Mony es tu asistente financiero por WhatsApp.",
    href: "/mony",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Asistente de Ventas",
    description: "Deja que tus clientes sean atendidos por tu IA, mientras tú te enfocas en crecer.",
    href: "#pricing",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Automatización Empresarial",
    description: "Soluciones integrales para grandes organizaciones que requieren flujos de trabajo personalizados y soporte dedicado.",
    href: "#contact",
  },
];

const ProductCard = ({ product }: { product: (typeof products)[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  };

  return (
    <Link href={product.href} className="h-full">
        <Card
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="text-center transition-transform duration-300 ease-out transform-style-3d hover:shadow-2xl h-full flex flex-col"
        >
        <CardHeader className="items-center flex-1">
            <div className="rounded-full bg-primary/10 p-4">
            {product.icon}
            </div>
            <CardTitle className="font-headline text-xl pt-4">{product.title}</CardTitle>
            <CardDescription className="pt-2">{product.description}</CardDescription>
        </CardHeader>
        </Card>
    </Link>
  );
};

export function Products() {
  return (
    <section id="products" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Descubre nuestros productos y servicios</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Creamos soluciones con IA que son simples para ti, para ayudarte a cumplir tus objetivos.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
