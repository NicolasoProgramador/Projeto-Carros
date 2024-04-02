import iconSuvs from "../assets/carros-base/icon-suvs.svg"

function SuVs() {
  return (
    <section className="bg-green p-12">
        <img src= {iconSuvs} alt="icone dos carros suv" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SuVs</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
        <a href="https://www.webmotors.com.br/suvs" target="_blank" className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green:text-offwhitebg">Ver Mais</a>
      </section>
  )
}

export default SuVs
