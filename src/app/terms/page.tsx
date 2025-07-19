export default function TermsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          Términos y Condiciones
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Última actualización: 1 de Agosto de 2024
        </p>

        <div className="prose prose-lg mt-12 max-w-none space-y-6 text-muted-foreground">
          <h2 className="font-headline text-2xl font-bold text-foreground">1. Introducción</h2>
          <p>
            Bienvenido a Confia Digital. Estos términos y condiciones describen las reglas y regulaciones para el uso de nuestro sitio web y servicios. Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web de Confia Digital si no aceptas todos los términos y condiciones establecidos en esta página.
          </p>

          <h2 className="font-headline text-2xl font-bold text-foreground">2. Licencia</h2>
          <p>
            A menos que se indique lo contrario, Confia Digital y/o sus licenciantes son dueños de los derechos de propiedad intelectual de todo el material en Confia Digital. Todos los derechos de propiedad intelectual están reservados. Puedes ver y/o imprimir páginas desde https://confiadigital.com para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
          </p>
          <p>No debes:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Volver a publicar material de https://confiadigital.com</li>
            <li>Vender, alquilar o sub-licenciar material de https://confiadigital.com</li>
            <li>Reproducir, duplicar o copiar material de https://confiadigital.com</li>
            <li>Redistribuir contenido de Confia Digital (a menos que el contenido se haga específicamente para la redistribución).</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-foreground">3. Cuentas de Usuario</h2>
          <p>
            Cuando creas una cuenta con nosotros, debes proporcionarnos información precisa, completa y actual en todo momento. El incumplimiento de esta disposición constituye una violación de los Términos, lo que puede resultar en la terminación inmediata de tu cuenta en nuestro Servicio.
          </p>
          <p>
            Eres responsable de salvaguardar la contraseña que utilizas para acceder al Servicio y de cualquier actividad o acción bajo tu contraseña, ya sea que tu contraseña esté con nuestro Servicio o con un servicio de terceros.
          </p>

          <h2 className="font-headline text-2xl font-bold text-foreground">4. Limitación de Responsabilidad</h2>
          <p>
            En ningún caso Confia Digital, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo, entre otros, la pérdida de ganancias, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) tu acceso o uso o incapacidad para acceder o usar el Servicio; (ii) cualquier conducta o contenido de un tercero en el Servicio; (iii) cualquier contenido obtenido del Servicio; y (iv) el acceso, uso o alteración no autorizados de tus transmisiones o contenido, ya sea basado en garantía, contrato, agravio (incluida la negligencia) o cualquier otra teoría legal, ya sea que hayamos sido informados o no de la posibilidad de dicho daño.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-foreground">5. Cambios</h2>
          <p>
            Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Térmicos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que los nuevos términos entren en vigencia. Lo que constituye un cambio material se determinará a nuestra entera discreción.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-foreground">6. Contáctanos</h2>
          <p>
            Si tienes alguna pregunta sobre estos Términos, por favor contáctanos a través del formulario en nuestra sección de contacto.
          </p>
        </div>
      </div>
    </div>
  );
}
