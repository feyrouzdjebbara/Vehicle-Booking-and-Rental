"use client"

import Image from "next/image"
import { Searchmanufacturer } from "."
import React, { useState } from "react"
import { useRouter } from "next/navigation"
const SearchButton=({otherClasses}:{otherClasses:string})=>(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
  <Image src="/magnifying-glass.svg" alt="magnifying" width={40} height={40}
  className="object-contain"/>
  </button>
)

function SearchBar({setManufacturer,setModel}) {

    const [searchManifacturer,setSearchManufacturer]=useState('')
    const [searchModel,setSearchModel]=useState('')
    const router =useRouter();
    const handleSearch  =(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
       if(searchManifacturer==='' && searchModel ===''){
        return alert('Please fill in the search bar')
      }
      setModel(searchModel)
      setManufacturer(searchManifacturer)
    }

    
  return (
   <form className='searchbar' onSubmit={handleSearch}>
         <div className="searchbar__item">
             <Searchmanufacturer 
             selected={searchManifacturer}
             setSelected={setSearchManufacturer} />

             <SearchButton otherClasses="sm:hidden"/>
         </div>
         <div className="searchbar__item">
         <Image src="/model-icon.png" alt="model-icon" width={25} height={25}
          className="absolute w-[20px] h-[20px] ml-4"/>
         <input type="text" name="model" value={searchModel}
         onChange={(e)=>setSearchModel(e.target.value)}
         placeholder="Tiguan"
         className="searchbar__input"/>
         <SearchButton otherClasses="sm:hidden"/>
         </div>
         <SearchButton otherClasses="max-sm:hidden"/>
   </form>
  )
}

export default SearchBar
