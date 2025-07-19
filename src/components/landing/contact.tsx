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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
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
          <div className="rounded-lg border bg-card p-8 shadow-sm">
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
