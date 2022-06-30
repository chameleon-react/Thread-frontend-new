import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPooling } from '../../../../../redux/slice/fabricSlice'

function Pooling({ setSelector }) {
    const { pooling } = useSelector(state => state.fabric)
    const dispatch = useDispatch()
    return (
        <>
            <div className="button flex justify-center mt-5 gap-[70%] font-bold">
                <div className="back">
                    <span onClick={() => setSelector(1)}>Back</span>
                </div>
                <div className="next">
                    <button onClick={() => window.alert('Pending')}>Next</button>
                </div>
            </div>
            <div className="qn pl-5 pr-10 font-semibold text-sm mt-5">
                Determines the style of your curtains at floor level
            </div>
            <div className='flex flex-col items-center gap-3 mt-5 font-semibold'>
                <button className={`${pooling === "Just Touching" && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setPooling("Just Touching"))}>Just Touching</button>
                <button className={`${pooling === 'Normal' && 'border-[#2553a8] border-2'} border h-10 rounded-lg w-[90%] text-left pl-5`} onClick={() => dispatch(setPooling('Normal'))}>Normal</button>
            </div>
        </>
    )
}

export default Pooling