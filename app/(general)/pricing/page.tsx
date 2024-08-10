import type { Metadata } from "next";



export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Esta es la página de precios de mi servicio',
};
function hola(hola:string) {
    console.log(hola);
}

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
      {hola("hola desde Pricing Page")}
    </>
  )
}
