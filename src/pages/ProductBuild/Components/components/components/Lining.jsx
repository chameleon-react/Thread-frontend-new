import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLining } from '../../../../../redux/slice/fabricSlice'
import {setLiningPrice} from '../../../../../redux/slice/price'
function Lining({ setSelected, setSelector }) {
    const { lining } = useSelector(state => state.fabric)
    const dispatch = useDispatch()
    return (
        <div className='content mt-5'>
            <div className="buttons flex justify-center gap-[70%] font-bold">
                <div className="back">
                    <span className='text-blue-700 font-medium' onClick={() => setSelected(2)}>Back</span>
                </div>
                <div className="">
                    <button className='border w-20  text-white rounded-2xl bg-blue-800  hover:text-blue-800 hover:bg-white duration-300 text-sm font-medium h-7' onClick={() => setSelector(1)}>Next {'>'}</button>
                </div>
            </div>
            <div className="qn pl-5 pr-16 font-semibold text-sm mt-5">
                The layer on the inside of the curtain, for insulation or a weightier look.
            </div>
            <div className="button flex flex-col gap-3 mt-5 items-center font-semibold">
                <button className={`${lining === 'Unlined' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => {dispatch(setLining('Unlined'));dispatch(setLiningPrice('Unlined'))}}>Unlined</button>
                <button className={`${lining === 'Cotton Sateen Lined' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => {dispatch(setLining('Cotton Sateen Lined'));dispatch(setLiningPrice('Cotton Sateen Lined'))}}>Cotton Sateen Lined</button>
                <button className={`${lining === 'Blackout Lined' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => {dispatch(setLining('Blackout Lined'));dispatch(setLiningPrice('Blackout Lined'))}}>Blackout Lined</button>
                <button className={`${lining === 'Bonded Fleece Blackout Lining' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => {dispatch(setLining('Bonded Fleece Blackout Lining'));dispatch(setLiningPrice('Bonded Fleece Blackout Lining'))}}>Bonded Fleece Blackout Lining</button>
                <button className={`${lining === 'Thermal Dim Out' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => {dispatch(setLining('Thermal Dim Out'));dispatch(setLiningPrice('Thermal Dim Out'))}}>Thermal Dim Out</button>
                <button className={`${lining === 'Interlind' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => {dispatch(setLining('Interlind'));dispatch(setLiningPrice('Interlind'))}}>Interlind</button>
            </div>
        </div>
    )
}

export default Lining