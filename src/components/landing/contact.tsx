"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  country_code: z.string().max(5, "Country code must be at most 5 characters long."),
  telefono: z.string().min(7, "Phone number must be at least 7 characters long."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

const countries = [
  { value: "+57", label: "🇨🇴 +57" },
  { value: "+52", label: "🇲🇽 +52" },
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+54", label: "🇦🇷 +54" }, // Argentina
  { value: "+34", label: "🇪🇸 +34" }, // España
  { value: "+51", label: "🇵🇪 +51" }, // Perú
  { value: "+56", label: "🇨🇱 +56" }, // Chile
  { value: "+55", label: "🇧🇷 +55" }, // Brasil
  { value: "+58", label: "🇻🇪 +58" }, // Venezuela
  { value: "+593", label: "🇪🇨 +593" }, // Ecuador
  { value: "+506", label: "🇨🇷 +506" }, // Costa Rica
  { value: "+591", label: "🇧🇴 +591" }, // Bolivia
  { value: "+53", label: "🇨🇺 +53" }, // Cuba
  { value: "+503", label: "🇸🇻 +503" }, // El Salvador
  { value: "+502", label: "🇬🇹 +502" }, // Guatemala
  { value: "+504", label: "🇭🇳 +504" }, // Honduras
  { value: "+505", label: "🇳🇮 +505" }, // Nicaragua
  { value: "+507", label: "🇵🇦 +507" }, // Panamá
  { value: "+595", label: "🇵🇾 +595" }, // Paraguay
  { value: "+598", label: "🇺🇾 +598" }, // Uruguay
  // Países Europeos Importantes
  { value: "+34", label: "🇪🇸 +34" }, // España
  { value: "+44", label: "🇬🇧 +44" }, // Reino Unido
  { value: "+49", label: "🇩🇪 +49" }, // Alemania
  { value: "+33", label: "🇫🇷 +33" }, // Francia
  { value: "+39", label: "🇮🇹 +39" }, // Italia
  { value: "+7", label: "🇷🇺 +7" }, // Rusia (incluye Kazajistán)
  { value: "+31", label: "🇳🇱 +31" }, // Países Bajos
  { value: "+41", label: "🇨🇭 +41" }, // Suiza
  { value: "+48", label: "🇵🇱 +48" }, // Polonia
  { value: "+32", label: "🇧🇪 +32" }, // Bélgica
  { value: "+43", label: "🇦🇹 +43" }, // Austria
  { value: "+353", label: "🇮🇪 +353" }, // Irlanda
  { value: "+46", label: "🇸🇪 +46" }, // Suecia
  { value: "+45", label: "🇩🇰 +45" }, // Dinamarca
  { value: "+358", label: "🇫🇮 +358" }, // Finlandia
  { value: "+30", label: "🇬🇷 +30" }, // Grecia
  { value: "+351", label: "🇵🇹 +351" }, // Portugal
  // Países Asiáticos Importantes
  { value: "+86", label: "🇨🇳 +86" }, // China
  { value: "+91", label: "🇮🇳 +91" }, // India
  { value: "+81", label: "🇯🇵 +81" }, // Japón
  { value: "+82", label: "🇰🇷 +82" }, // Corea del Sur
  { value: "+62", label: "🇮🇩 +62" }, // Indonesia
  { value: "+65", label: "🇸🇬 +65" }, // Singapur
  { value: "+966", label: "🇸🇦 +966" }, // Arabia Saudita
  { value: "+63", label: "🇵🇭 +63" }, // Filipinas
  { value: "+66", label: "🇹🇭 +66" }, // Tailandia
];

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country_code: "+57",
      telefono: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">¡Contactanos!</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tienes preguntas o necesitas una solución personalizada? Nuestro equipo está aquí para ayudarte. Llena el formulario, y nos pondremos en contacto lo antes posible.
            </p>
            {/* <p className="mt-4 text-lg text-muted-foreground">
            Have questions or need a custom solution? Our team is here to help you succeed. Fill out the form, and we'll get back to you as soon as possible.
            </p> */}
            <div className="mt-8">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Contact us"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                data-ai-hint="office team"
              />
            </div>
          </div>
          <div className="rounded-lg border bg-card p-4 md:p-8 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tucorreo@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name="country_code"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormLabel>Código</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country.value} value={country.value}>
                                {country.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="3001234567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Estoy interesado en el asistente de ventas" {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Enviar</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
