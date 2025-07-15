import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Innovate Inc.",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    testimonial: "AutoSales has transformed our sales process. We've seen a 40% increase in productivity and our team can now focus on building relationships rather than manual data entry.",
  },
  {
    name: "Michael Chen",
    company: "Tech Solutions",
    image: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    testimonial: "The pro plan is a game-changer. The lead scoring feature alone has helped us prioritize our efforts and increased our conversion rates by 25%. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    company: "Growth Co.",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman professional",
    testimonial: "As a small business, we needed something powerful yet affordable. The basic plan was the perfect fit. It's intuitive, effective, and has scaled with us as we've grown.",
  },
];

const Rating = () => (
  <div className="flex items-center gap-1 text-yellow-400">
    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
  </div>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Loved by Businesses Worldwide</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <CardContent className="pt-6">
                <Rating />
                <p className="mt-4 text-muted-foreground">"{item.testimonial}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={item.image} alt={item.name} data-ai-hint={item.aiHint} />
                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
