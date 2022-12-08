import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className='w-72 border-2 flex flex-col justify-center items-center p-5 rounded-xl gap-5 bg-white h-[400px] shadow-lg hover:scale-105 translation duration-200 hover:shadwo-xl'>
        <img src={meal.strMealThumb} width='250px' className='rounded-xl' alt="" />
        <h3>{meal.strMeal}</h3>
        <button className='text-black font-bold'>
            <Link to={`/detail/${meal.idMeal}`}><AiFillEye className='text-2xl'/></Link>
        </button>
    </div>
  )
}

export default Card