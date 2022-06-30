import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setpoleOrTrack } from '../../../../../redux/slice/fabricSlice'

function Pole({ setSelector }) {
    const dispatch = useDispatch()
    const { poleOrTrack } = useSelector(state => state.fabric)
    return (
        <>
            <div className="button flex justify-center mt-5 gap-[70%] font-bold">
                <div className="back">
                    <span onClick={() => setSelector(0)}>Back</span>
                </div>
                <div className="next">
                    <button onClick={() => setSelector(2)}>Next</button>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 font-semibold mt-5'>
                <button className={`${poleOrTrack === "I don't need one" && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setpoleOrTrack("I don't need one"))}>I don't need one</button>
                <button className={`${poleOrTrack === 'Pole' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setpoleOrTrack('Pole'))}>Pole</button>
                <button className={`${poleOrTrack === 'Track' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setpoleOrTrack('Track'))}>Track</button>
            </div>
        </>
    )
}

export default Pole