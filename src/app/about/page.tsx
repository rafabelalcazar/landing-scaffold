import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

const teamMembers = [
  {
    name: "Rafael Belalcázar",
    role: "Fundador & CEO",
    image: "https://placehold.co/200x200.png",
    aiHint: "man portrait professional",
    description: "Experto en automatización y desarrollo de negocios con IA. Apasionado por ayudar a las empresas a escalar de manera inteligente y eficiente."
  },
  {
    name: "Sofía Restrepo",
    role: "Directora de Operaciones",
    image: "https://placehold.co/200x200.png",
    aiHint: "woman portrait professional",
    description: "Especialista en optimizar procesos y garantizar la excelencia en cada proyecto. Lidera al equipo para entregar resultados excepcionales."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-primary">Nuestra Misión</p>
          <h1 className="font-headline mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Empoderamos tu crecimiento con tecnología simple
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            En ConfIA Digital, creemos que la tecnología avanzada no tiene por qué ser complicada. Nuestra misión es crear herramientas de inteligencia artificial y automatización que sean intuitivas, accesibles y potentes. Ayudamos a personas y empresas a organizar sus finanzas, optimizar sus ventas y alcanzar sus metas sin las barreras técnicas tradicionales.
          </p>
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Conoce a nuestro equipo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Somos un equipo de innovadores y solucionadores de problemas dedicados a tu éxito.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32">
                <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.aiHint} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-headline mt-6 text-2xl font-bold text-foreground">{member.name}</h3>
              <p className="text-md mt-1 font-semibold text-primary">{member.role}</p>
              <p className="mt-4 text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
