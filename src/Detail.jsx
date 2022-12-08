import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {AiFillYoutube} from 'react-icons/ai'
import Loading from './Loading/Loading'

const Detail = () => {
    const {id}=useParams();
    const [meal,setMeal] = useState({});
    const [isloading,setIsLoading]=useState(true);
    const getSingleMeal = async()=>{
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        console.log(data.meals[0]);
        setMeal(data?.meals[0]);
        setIsLoading(false);
        };
    useEffect(()=>{
        getSingleMeal()
    },[])
  return (
    <>
        {
            isloading?(<Loading/>):
            (    <div className='flex flex-col gap-5'>
            <img src={meal.strMealThumb} alt="" width={'300px'} className='rounded-xl shadow-xl'/>
            <div className='text-white bg-pink-500 w-20 text-center text-sm rounded-lg py-2'>
                {meal.strCategory}
            </div>
            <h1 className='text-2xl font-semibold'>{meal.strMeal}</h1>
            <div>
                <h2 className='text-2xl mb-2'>Instruction</h2>
                <p className='tracking-wider leading-4 text-sm text-gray-600'>{meal.strInstructions}</p>
            </div>
            <div className='flex gap-3 items-center'>
                <a href={meal.strYoutube} target='__blank'>
                    <AiFillYoutube className=' text-red-600 text-5xl cursor-pointer'/>
                </a>
                <p className=' text-black'>Watch on Youtube</p>
            </div>
            </div>)
        }
    </>
  )
}

export default Detail