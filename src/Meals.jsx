import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Loading from './Loading/Loading';

const Meals = () => {
    const [meals,setMeals]=useState([]);
    const [isloading,setIsLoading] = useState(true);

    const getMeals = async()=>{
        const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");

        setMeals(data.meals);
        setIsLoading(false);
    }

    useEffect (()=>{
        getMeals();
    },[])

  return (
    <>
        {
            isloading?(<Loading/>):
            ( <div className='flex flex-wrap gap-5 py-5 justify-center items-center'>
            {meals ?.map(meal =>(
                <Card key={meal.idMeal} meal={meal}/>
            ))}
            </div>
        )}
    </>
  )
}

export default Meals