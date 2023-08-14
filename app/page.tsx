"use client"
import { useState ,useEffect} from "react"
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/Components";
import { fuels, yearsOfProduction } from "@/Constants";
import { fetchCars } from "@/Utils";
import Image from "next/image";

export default  function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setloading] = useState(true)

  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")

  const [year, setyear] = useState(2022)
  const [fuel, setFuel] = useState("")

  const [limit, setlimit] = useState(10)
 
  const getCars= async()=>{
   try {
    const result= await fetchCars({
      manufacturer:manufacturer || '',
      year:year || 2023,
      fuel:fuel || '',
      limit:limit || 10,
      model:model || '',
    })
    setAllCars(result)
   } catch (error) {
    
   }finally{
    setloading(false)
   }
  }
   
useEffect(() => {
  getCars()
}, [fuel,year, manufacturer,model,limit])


  const isDataEmpty = !Array.isArray(allCars)|| allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width"
      id="discover">
             <div className="home__text-container">
                 <h1 className="text-4xl font-extrabold">
                  Car Catalogue
                 </h1>
                 <p>
                  Explore the cars you might like
                 </p>
             </div>
             <div className="home__filters">
                 <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
                 <div className="home__filter-container">
                 { <>  <CustomFilter title="fuel" options={fuels}
                 setFilter={setFuel} />
                   <CustomFilter title="year" options={yearsOfProduction}
                    setFilter={setyear}/>
                   </>} 
                 </div>

             </div>
           {allCars.length > 0 ?(
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car)=> (
                <CarCard car={car} />
                ))}

              </div>
              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"/>
                </div>
              )}
              <ShowMore
              pageNumber={limit/10}
              isNext={limit >allCars.length}
              setLimit={setlimit}
              />
            </section>
           ):(
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold ">Oups, No results</h2>
              <p>{allCars?.message}</p>
            </div>
           )

           }


      </div>
    </main>
  )
}
