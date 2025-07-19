import Link from "next/link";
import { Rocket, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://raw.githubusercontent.com/rafabelalcazar/icons/refs/heads/main/Confia%20Digital%20-%20Rafael%20Belalcazar.png"
                alt="Confia Digital"
                className="h-7 w-7 rounded-sm object-cover"
              />
              {/* <Rocket className="h-7 w-7 text-primary" /> */}
              <span className="font-headline text-2xl font-bold">Confia Digital</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Automatiza tus ventas y haz crecer tu negocio.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Productos</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#products" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="#comparison" className="text-sm text-muted-foreground hover:text-foreground">Comparison</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Compañia</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">Nosotros</Link></li>
              {/* <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li> */}
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Confia Digital, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
