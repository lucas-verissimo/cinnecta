import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex justify-evenly items-center max-w-7xl mx-auto pt-12">
      <div className="max-w-xl flex flex-col gap-6">
        <h1 className="text-5xl font-bold text-blue-0-33-99 leading-14">
          Identifique os clientes com oportunidades hoje
        </h1>
        <p className="text-grey-109 text-base font-Raleway pr-4">
          Soluções que recomendam ações para geração de valor em todas as etapas
          do ciclo de vida do cliente
        </p>
        <button className="bg-blue-0-85-255 hover:bg-blue-0-33-99 transition-all text-white w-52 h-9 rounded">
          fale com um especialista
        </button>
      </div>
      <Image
        src="/img/imageBanner-home.svg"
        alt="Banner Cinnecta"
        width={425}
        height={324}
        priority
      />
    </div>
  );
}
