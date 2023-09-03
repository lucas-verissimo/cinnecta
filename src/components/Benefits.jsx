import Image from "next/image";

const Benefit = ({img, title, description}) => {
  return (
    <div className="flex gap-6 justify-center mt-14 items-start">
      <Image
        src={img}
        alt="Ícone"
        width={63}
        height={63}
        priority
      />
      <div className="max-w-xxs">
        <h2 className="text-blue-0-33-99 text-2xl font-bold">{title}</h2>
        <p className="text-grey-109 text-base mt-2 font-Raleway">{description}</p>
      </div>
    </div>
  )
}

export default function Benefits() {
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto">
      <Benefit img="/img/Rentabilização.svg" title="Rentabilização" description="Saiba quais são os clientes com possibilidades de upsell e cross-sell e maximize o potencial de geração de valor." />
      <Benefit img="/img/fidelizar-icon.svg" title="Fidelização" description="Identifique os clientes mais propensos ao churn e direcione as estratégias de fidelização no momento certo." />
      <Benefit img="/img/personalizar-icon.svg" title="Personalização" description="Entenda as tendências, preferências e necessidades dos seus clientes para personalizar suas ofertas e comunicações." />
    </div>
  )
}