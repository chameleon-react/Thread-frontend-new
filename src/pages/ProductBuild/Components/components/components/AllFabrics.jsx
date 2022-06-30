import React from 'react'
import { setFabricType } from '../../../../../redux/slice/fabricSlice'
import { useDispatch} from 'react-redux'
function AllFabrics() {
  
  const dispatch = useDispatch()
  return (
    <div className='flex gap-5'>
      <button className='h-12 w-12 rounded-full bg-cover' style={{backgroundImage:"url('/fabric/Porcelain.png')"}} onClick={()=>{dispatch(setFabricType('Porcelains.jpg'))}}></button>
      <button className='h-12 w-12 rounded-full bg-cover' style={{backgroundImage:"url('/fabric/Alabaster.jpg')"}} onClick={()=>{dispatch(setFabricType('Alabasters.jpg'))}}></button>
      <button className='h-12 w-12 rounded-full bg-cover' style={{backgroundImage:"url('/fabric/Mink.jpg')"}} onClick={()=>{dispatch(setFabricType('Minks.jpg'))}}></button>
      <button className='h-12 w-12 rounded-full bg-cover' style={{backgroundImage:"url('/fabric/White.jpg')"}} onClick={()=>{dispatch(setFabricType('Whites.jpg'))}}></button>
    </div>
  )
}

export default AllFabrics