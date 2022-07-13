import React from 'react'
import { setFabricType } from '../../../../../redux/slice/fabricSlice'
import { setFabricInitialPrice } from '../../../../../redux/slice/price'
import { useDispatch } from 'react-redux'
function AllFabrics({setdisable}) {

  const dispatch = useDispatch()
  return (
    <>
      <div className="odin ml-5 mt-5">
        <span className='font-semibold'>Odin</span>
      </div>
      <div className='flex gap-5 flex-wrap ml-5 mt-5' onClick={()=>setdisable(false)}>
        <button className='h-12 w-12 rounded-full bg-cover' style={{ backgroundImage: "url('/fabric/Porcelain.png')" }} onClick={() => { dispatch(setFabricType('Porcelains.jpg')); dispatch(setFabricInitialPrice(200)) }}></button>
        <button className='h-12 w-12 rounded-full bg-cover' style={{ backgroundImage: "url('/fabric/Alabaster.jpg')" }} onClick={() => { dispatch(setFabricType('Alabasters.jpg')); dispatch(setFabricInitialPrice(250)) }}></button>
        <button className='h-12 w-12 rounded-full bg-cover' style={{ backgroundImage: "url('/fabric/Mink.jpg')" }} onClick={() => { dispatch(setFabricType('Minks.jpg')); dispatch(setFabricInitialPrice(300)) }}></button>
        <button className='h-12 w-12 rounded-full bg-cover' style={{ backgroundImage: "url('/fabric/White.jpg')" }} onClick={() => { dispatch(setFabricType('Whites.jpg')); dispatch(setFabricInitialPrice(350)) }}></button>
        <button className='h-12 w-12 rounded-full bg-cover' style={{ backgroundImage: "url('/fabric/Storm.jpg')" }} onClick={() => { dispatch(setFabricType('Storms.jpg')); dispatch(setFabricInitialPrice(400)) }}></button>
        <button className='h-12 w-12 rounded-full bg-cover' style={{ backgroundImage: "url('/fabric/Ash.jpg')" }} onClick={() => { dispatch(setFabricType('Ashs.jpg')); dispatch(setFabricInitialPrice(450)) }}></button>
        <button className='h-12 w-12 rounded-full bg-cover' style={{ backgroundImage: "url('/fabric/Ebony.jpg')" }} onClick={() => { dispatch(setFabricType('Ebonys.jpg')); dispatch(setFabricInitialPrice(500)) }}></button>
        <button className='h-12 w-12 rounded-full bg-cover' style={{ backgroundImage: "url('/fabric/Marble.jpg')" }} onClick={() => { dispatch(setFabricType('Marbles.jpg')); dispatch(setFabricInitialPrice(550)) }}></button>
      </div>

    </>
  )
}

export default AllFabrics