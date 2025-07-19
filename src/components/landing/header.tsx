"use client"

import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b bg-background/80 backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* <Rocket className="h-6 w-6 text-primary" /> */}
          <img 
          src="https://raw.githubusercontent.com/rafabelalcazar/icons/refs/heads/main/Confia%20Digital%20-%20Rafael%20Belalcazar.png"
          alt="Confia Digital"
          className="h-6 w-6 rounded-sm object-cover"
          />
          <span className="font-headline text-xl font-bold">Confia Digital</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Productos
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Precios
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contacto
          </Link>
        </nav>
        <Button asChild className="hidden md:inline-flex items-center gap-2 text-sm font-medium " >
          <Link href="#pricing">Empezar</Link>
        </Button>
      </div>
    </header>
  );
}
