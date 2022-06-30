import React from 'react'
import { BiSave, BiShareAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'


function View() {
    const { fabricType } = useSelector(state => state.fabric)
    return (
        <div className='w-full h-[100%]  md:h-full relative'>
            <div className="buttons absolute     left-[65%] top-[3%] border border-[#B6B7BA] rounded-3xl h-10 w-[30%] flex justify-center items-center  font-bold text-[#85888C]">
                <button className='w-1/2'>ADD TO CART</button>
                <div className="divider flex divide-x divide-[#B6B7BA] h-full">
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <button className='w-1/2'>...</button>
            </div>
            <div className="saveAndShare absolute top-[3%] left-[3%] flex flex-col gap-5 ">
                <div className="save flex flex-col hover:text-blue-400">
                    <BiSave className='text-2xl' />
                    <span className='text-xs font-semibold'>SAVE</span>
                </div>
                <BiShareAlt className='text-2xl hover:text-blue-400' />
            </div>
            <div className={`view flex justify-center items-center flex-col w-full h-full`}>
                <img src={`/fabric/${fabricType} `} alt=''/>
            </div>
        </div>
    )
}

export default View