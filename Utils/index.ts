import { manufacturers } from "@/Constants";
import { CarProps } from "@/types";
import { FilterProps } from "@/types";
export async function fetchCars(filters:FilterProps){
  const {manufacturer,year,model,limit,fuel}=filters
    const headers={
		'X-RapidAPI-Key': '4d98997cbemsh494f112a82b0736p195fdajsn59dc4605e93c',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response=await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {headers:headers,})
    const result= await response.json()
    return result 
}

export const calculateCarRent = (fuelEfficiency: number, year: number) => {
  const basePricePerDay = 6000; // Base rental price per day in Algerian Dinar (DZD)
  const mileageFactor = 40; // Additional rate per kilometer driven (in DZD)
  const ageFactor = 300; // Additional rate per year of vehicle age (in DZD)

  // Calculate additional rate based on mileage and age
  const mileageRate = fuelEfficiency * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};



  export const generateCarImage =(car:CarProps,angle? : string)=>{
    const url=new URL('https://cdn.imagin.studio/getimage')
    const {make,year,model}=car;
   
    url.searchParams.append('customer', "hrjavascript-mastery" || '');
url.searchParams.append('make', make);
url.searchParams.append('modelFamily', model.split(" ")[0]);
url.searchParams.append('zoomType', 'fullscreen');
url.searchParams.append('modelYear', `${year}`);
url.searchParams.append("zoomType", "fullscreen");
url.searchParams.append('angle', `${angle}`);

return `${url}`;
  
    return `${url}`;

  }

  export const updateSearchParams=(type:string, value:string)=>{
    const searchParams =new URLSearchParams(window.location.search)
     
    searchParams.set(type, value)
 
const newpathname= `${window.location.pathname}? ${
 searchParams.toString()}`
 return newpathname
  }