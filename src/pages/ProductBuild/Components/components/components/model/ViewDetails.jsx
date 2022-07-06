import React from 'react'
import { useSelector } from 'react-redux'

function ViewDetails({ setViewDetails }) {
    const { fabricType, pairOrNot, lining, look } = useSelector(state => state.fabric)
    const { measurementItem, windowName, width, height, } = useSelector(state => state.measurement)
    const { makingPrice, boxingPrice, totalPrice } = useSelector(state => state.price)
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm'>
            <div className={` h-[40rem] bg-[#F8F9FA] w-[40rem] rounded-3xl`}>
                <div className="MainBar bg-white h-20 w-full flex justify-center items-center gap-52 rounded-t-3xl">
                    <div className=''>

                    </div>
                    <div className="title font-semibold text-2xl   ">
                        Summary
                    </div>
                    <div className="cross">
                        <span className='text-2xl font-semibold' onClick={() => setViewDetails(false)}>X</span>
                    </div>
                </div>
                <div className="calculation h-full flex flex-col items-center">
                    <div className="title mt-5">
                        <span className='font-medium'>Price Calculation</span>
                    </div>
                    <div className="details mt-5 h-[50%] w-[70%] flex justify-evenly items-center font-semibold">
                        <div className="left flex flex-col gap-5">
                            <span>Fabric</span>
                            <span>Fabric Type</span>
                            <span>Measurement</span>
                            <span>Pannel</span>
                            <span>Style</span>
                            <span>Features</span>
                            <span>Making Price</span>
                            <span>Boxed {'&'} Postage</span>
                            
                        </div>
                        <div className="right flex flex-col gap-5">
                            <span>{fabricType.split('.')[0]}</span>
                            <span>{measurementItem}</span>
                            <span>{height}*{width}({windowName})</span>
                            <span>{pairOrNot}</span>
                            <span>{look}</span>
                            <span>{lining}</span>
                            <span>{Math.round(makingPrice*100)/100}</span>
                            <span>{boxingPrice}</span>
                            
                        </div>
                        
                    </div>
                    <hr />
                    <div className="totalPrice mt-10 flex gap-10">
                        <span className='font-bold'>Total Price</span>
                        <span className='font-bold'>{totalPrice}</span>
                    </div>
                    <div className="flex gap-10 mt-10">
                        <button className='h-10 w-32 border rounded-3xl font-semibold text-lg text-white bg-[#2553A8] hover:bg-white hover:text-[#2553A8] duration-200'>SAVE</button>
                        <button className='h-10 w-32 border rounded-3xl font-semibold text-lg text-white bg-[#2553A8] hover:bg-white hover:text-[#2553A8] duration-200'>EMAIL</button>
                        <button className='h-10 w-32 border rounded-3xl font-semibold text-lg text-white bg-[#2553A8] hover:bg-white hover:text-[#2553A8] duration-200'>WHATSAPP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails