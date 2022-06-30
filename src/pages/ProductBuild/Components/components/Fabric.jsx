import React from 'react'
import { useState } from 'react'
import AllFabrics from './components/AllFabrics'
import YourSample from './components/YourSample'

function Fabric({ setSelected }) {
  const [Selector, setSelector] = useState(0)
  return (
    <div>
      <div className="flex justify-center font-semibold items-center h-14 gap-28">
        <span>
          Select your fabric
        </span>
        <button className='border w-20  text-white rounded-2xl bg-blue-800  hover:text-blue-800 hover:bg-white duration-300 text-sm font-medium h-7' onClick={() => setSelected(1)}>Next {'>'}</button>
      </div>
      <hr />
      <div className="sample flex justify-center items-center gap-5 font-semibold">
        <div className={`${Selector === 0 && 'text-blue-600 decoration-blue-600'}`} onClick={() => setSelector(0)}>
          <span>ALL FABRICS</span>
        </div>
        <div className={`${Selector === 1 && 'text-blue-600 decoration-blue-600'}`} onClick={() => setSelector(1)}>
          <span>YOUR SAMPLE</span>
        </div>
      </div>
      <hr />
      {Selector === 0 && <AllFabrics />}
      {Selector === 1 && <YourSample />}
    </div>
  )
}

export default Fabric