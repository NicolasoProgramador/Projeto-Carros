import iconLuxury from  "../assets/carros-base/icon-luxury.svg"

function Luxuosos() {
  return (
    <div className="bg-dark-green p-12 rounded-b-lg">
    <img src= {iconLuxury} alt="icone dos carros de luxo mb-7" />
    <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>  
    <p className="font-lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
    <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank" className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green:text-offwhitebg">Ver Mais</a>
  </div>
  )
}

export default Luxuosos
