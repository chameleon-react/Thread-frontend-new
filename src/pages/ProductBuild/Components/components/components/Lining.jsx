import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLining } from '../../../../../redux/slice/fabricSlice'
function Lining({ setSelected, setSelector }) {
    const { lining } = useSelector(state => state.fabric)
    const dispatch = useDispatch()
    return (
        <div className='content mt-5'>
            <div className="buttons flex justify-center gap-[70%] font-bold">
                <div className="back">
                    <span onClick={() => setSelected(2)}>Back</span>
                </div>
                <div className="next">
                    <button onClick={() => setSelector(1)}>Next</button>
                </div>
            </div>
            <div className="qn pl-5 pr-16 font-semibold text-sm mt-5">
                The layer on the inside of the curtain, for insulation or a weightier look.
            </div>
            <div className="button flex flex-col gap-3 mt-5 items-center font-semibold">
                <button className={`${lining === 'Unlined' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setLining('Unlined'))}>Unlined</button>
                <button className={`${lining === 'Lined' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setLining('Lined'))}>Lined</button>
                <button className={`${lining === 'Blackout Lined' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setLining('Blackout Lined'))}>Blackout Lined</button>
                <button className={`${lining === 'Interlined' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setLining('Interlined'))}>Interlined</button>
                <button className={`${lining === 'Interlined Blackout' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setLining('Interlined Blackout'))}>Interlined Blackout</button>
                <button className={`${lining === 'Thermal Lined' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setLining('Thermal Lined'))}>Thermal Lined</button>
            </div>
        </div>
    )
}

export default Lining