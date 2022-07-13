import React from 'react'
import { useState } from 'react'
import Fabric from './components/Fabric'
import Features from './components/Features'
import Measure from './components/Measure'
import Style from './components/Style'

function SelectionPart() {
  const [selected, setSelected] = useState(0)
  return (
    <div className='h-full w-full'>
      <div className='flex justify-around items-center h-12 bg-[#E7E8E9]'>
        <div className={`${selected === 0 && 'bg-white text-[#2453A8]'} h-full w-1/4 flex justify-center items-center rounded-md font-semibold`} onClick={() => setSelected(selected)}>Fabric</div>
        <div className={`${selected === 1 && 'bg-white text-[#2453A8]'} h-full w-1/4 flex justify-center items-center rounded-md font-semibold`} onClick={() => setSelected(selected)}>Measure</div>
        <div className={`${selected === 2 && 'bg-white text-[#2453A8]'} h-full w-1/4 flex justify-center items-center rounded-md font-semibold`} onClick={() => setSelected(selected)}>Style</div>
        <div className={`${selected === 3 && 'bg-white text-[#2453A8]'} h-full w-1/4 flex justify-center items-center rounded-md font-semibold`} onClick={() => setSelected(selected)}>Features</div>
      </div>
      {selected === 0 && <Fabric setSelected={setSelected} />}
      {selected === 1 && <Measure setSelected={setSelected} />}
      {selected === 2 && <Style setSelected={setSelected} />}
      {selected === 3 && <Features setSelected={setSelected} />}
    </div>
  )
}

export default SelectionPart