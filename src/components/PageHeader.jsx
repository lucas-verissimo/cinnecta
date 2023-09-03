import Image from "next/image";

export default function PageHeader() {
  return (
    <header className="bg-white flex justify-between h-20 px-4 shadow-3xl">
      <Image
        src="/img/Logo-cinnecta.svg"
        alt="Cinnecta Logo"
        className="ml-2"
        width={180}
        height={37}
        priority
      />
      <nav className="flex">
        <ul className="flex gap-8">
          <li className="flex">
            <a href="#" className="flex items-center font-sans hover:underline">
              soluções
            </a>
          </li>
          <li className="flex">
            <a href="#" className="flex items-center font-sans hover:underline">
              a cinnecta
            </a>
          </li>
          <li className="flex">
            <a href="#" className="flex items-center font-sans hover:underline">
              conteúdos
            </a>
          </li>
          <li className="flex">
            <a href="#" className="flex items-center font-sans hover:underline">
              carreiras
            </a>
          </li>
          <li className="flex items-center">
            <button className="bg-blue-0-85-255 hover:bg-blue-0-33-99 transition-all text-white w-52 h-9 rounded">
              fale com um especialista
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
