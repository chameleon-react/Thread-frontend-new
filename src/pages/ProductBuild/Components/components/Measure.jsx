import React from 'react'

function Measure({ setSelected }) {
  return (
    <div>
      <div className="flex justify-around h-14 items-center font-semibold">
        <button className='text-blue-700 font-medium' onClick={() => setSelected(0)}>Back</button>
        <span>Get your measurements</span>
        <button className='border w-20  text-white rounded-2xl bg-blue-800 hover:text-blue-800 hover:bg-white duration-300 text-sm font-medium h-7' onClick={() => setSelected(2)}>Next</button>
      </div>
      <hr />
      <div className="body flex justify-center items-center mt-[10%]">
        <button className='border h-10 w-[90%] rounded-md'>Add a new measurements</button>
      </div>
    </div>
  )
}

export default Measure