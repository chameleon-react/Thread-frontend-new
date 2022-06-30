import React from 'react'
import Look from './components/Look'
import { setPairOrNot } from '../../../../redux/slice/fabricSlice'
import { useSelector, useDispatch } from 'react-redux'
function Style({ setSelected }) {
  const dispatch = useDispatch()
  const { pairOrNot } = useSelector(state => state.fabric)
  return (
    <div>
      <div className="flex justify-around h-14 items-center font-semibold">
        <button className='text-blue-700 font-medium' onClick={() => setSelected(1)}>Back</button>
        <span>Choose your style</span>
        <button className='border w-20  text-white rounded-2xl bg-blue-800  hover:text-blue-800 hover:bg-white duration-300 text-sm font-medium h-7' onClick={() => setSelected(3)}>Next</button>
      </div>
      <hr />
      <div className="flex items-center flex-col">
        <div className="pairOrSingle">
          <span className='font-semibold text-lg'>Pair or single panel?</span>
        </div>
        <div className="pairOrSingle flex gap-5">
          {pairOrNot === 'pair' && <>
            <div className="img h-24 w 24">
              <img src='/image/pair.svg' alt="" onClick={() => dispatch(setPairOrNot('pair'))} />
            </div>
            <div className="img h-24 w 24">
              <img src='/image/singleNotSelected.svg' alt='' onClick={() => dispatch(setPairOrNot('single'))} />
            </div>
          </>}
          {pairOrNot === 'single' && <>
            <div className="img h-24 w-24">
              <img src='/image/pairNotSelected.svg' alt="" onClick={() => dispatch(setPairOrNot('pair'))} />
            </div>
            <div className="img h-24 w-24">
              <img src='/image/single.svg' alt='' onClick={() => dispatch(setPairOrNot('single'))} />
            </div>
          </>}
        </div>
        <Look />
      </div>
    </div>
  )
}

export default Style