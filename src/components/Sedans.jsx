import iconSedans from "../assets/carros-base/icon-sedans.svg"

function Sedans() {
  return (
    <div className="bg-orange p-12 rounded-t-lg max-lg:rounded-l-lg lg:rounded-r-lg">
    <img src={iconSedans} alt="icone dos carro sedans" className="mb-7"/>
    <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
    <p className="font-lexend mb-7 text-offwhite lg:mb-20 ">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
    <a href="https://www.webmotors.com.br/sedans" target="_blank" className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange:text-offwhitebg">Ver mais</a>
  </div>
  )
}

export default Sedans

