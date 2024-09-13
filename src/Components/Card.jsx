import React from 'react'
import useCardData from '../Hooks/useCardData'
import '../Styles/Card.css'
const Card = () => {
  const {quotes,fetchQuotes} = useCardData();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    await fetchQuotes();
}
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className="card card-compact glassy-card bg-base-100 shadow-xl w-96 border-2 p-2 m-2">
            <div className="card-body ">
                <h2 className="card-title text-gray-900 flex justify-center items-center">Inspirational Quotes</h2>
                <p className='text-lg text-gray-800'>{quotes}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleSubmit}>Next...</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Card