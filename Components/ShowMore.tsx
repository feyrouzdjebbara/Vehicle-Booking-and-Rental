"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import { Router } from "next/router"
import { CustomButton } from "."
import { updateSearchParams } from "@/Utils"

const ShowMore=({pageNumber,isNext,setLimit}:ShowMoreProps)=> {
     
      const HandleNavigation=()=>{
        const newLimit= (pageNumber +1)*10
        setLimit(newLimit)
      }
    return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
        title="Show More"
        btnType="button"
        containerStyles="bg-primary-blue rounded-full text-white"
        handelClick={HandleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
