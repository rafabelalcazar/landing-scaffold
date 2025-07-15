import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Products } from "@/components/landing/products";
import { Comparison } from "@/components/landing/comparison";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Comparison />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
