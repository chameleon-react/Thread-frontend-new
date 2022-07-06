import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setHasPole, setHeight, setWidth, setInstallationHeight } from '../../../../../../redux/slice/measurement'
import { setPriceByHeightAndWidth } from '../../../../../../redux/slice/price'
function Model2({ setShowMyModel, setModel }) {
    const dispatch = useDispatch()
    const { hasPole, width, height, installationHeight } = useSelector(state => state.measurement)
    const invalidMeasurement = <span className='font-medium'>Invalid measurement</span>
    const changeWidth = (wid) => {
        if (49 < wid && wid <= 490) {
            dispatch(setWidth(wid))
        } else dispatch(setWidth(''))
    }
    const changeHeight = (hei) => {
        if (49 < hei && hei <= 300) {
            dispatch(setHeight(hei))

        } else dispatch(setHeight(''))
    }
    const changeInstallationHeight = (hei) => {
        if (49 < hei && hei <= 250) {
            dispatch(setInstallationHeight(hei))
        } else dispatch(setInstallationHeight(''))
    }
    const next = () => {
        if (height && width) {
            dispatch(setWidth(Number(width) + 50))
            setModel(2)
            dispatch(setPriceByHeightAndWidth({
                width: Number(width) + 50,
                height: Number(height)
            }))
        }
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm'>
            <div className={`h-[40rem] bg-[#F8F9FA] w-[40rem] rounded-3xl`}>
                <div className="MainBar bg-white h-20 w-full flex justify-center items-center gap-14 rounded-t-3xl">
                    <div className=''>
                    </div>
                    <div className="title font-semibold text-2xl   ">
                        Add window measurements
                    </div>
                    <div className="cross ml-5">
                        <span className='text-2xl font-semibold' onClick={() => setShowMyModel(false)}>X</span>
                    </div>
                </div>

                <div className="form flex flex-col items-center">
                    <div className="poleqn mt-5">
                        <span className='font-medium'>Do you have a pole or track installed?</span>
                    </div>
                    <div className="ansButton mt-3">
                        <div className='border h-7 w-28 border-[#92B6D5] rounded-3xl'>
                            <div className='flex justify-center divide-x-2 h-full'>
                                <button onClick={() => { dispatch(setHasPole('yes')); console.log("Hello") }} className={`${hasPole === 'yes' && 'bg-[#92B6D5]'} w-1/2  rounded-l-xl`}>YES</button>
                                <button onClick={() => { dispatch(setHasPole('no')) }} className={`${hasPole === 'no' && 'bg-[#92B6D5]'} w-1/2 rounded-r-xl`}>NO</button>
                            </div>
                        </div>
                    </div>
                    <div className="pl-5 width   bg-[#E6ECF4] h-12 w-[70%] mt-5 flex items-center rounded-lg">
                        <div className="flex flex-col">
                            <span className='font-medium'>Width</span>
                            <span>CM (50-490)</span>
                        </div>
                        <input onChange={e => changeWidth(e.target.value)} placeholder='Add Measurements' className='text-center font-medium rounded-xl  h-10 w-64 ml-10' type="number" />
                    </div>
                    {!width && invalidMeasurement}
                    <div className="pl-5 Height bg-[#E6ECF4] h-12 w-[70%] mt-5 flex items-center rounded-lg">
                        <div className="flex flex-col">
                            <span className='font-medium'>Height</span>
                            <span>CM (50-300)</span>
                        </div>
                        <input onChange={e => changeHeight(e.target.value)} placeholder='Add Measurements' type="number" className='text-center font-medium rounded-xl ml-10 h-10 w-64' />
                    </div>
                    {!height && invalidMeasurement}
                    {/* <div className=" pl-5 installHeight bg-[#E6ECF4] h-16 w-[70%] mt-5 flex items-center rounded-lg">
                        <div className="flex flex-col">
                            <span className='font-medium'>Installation Height</span>
                            <span>CM (50-250)</span>
                        </div>
                        <input onChange={e => changeInstallationHeight(e.target.value)} placeholder='Add Measurements' type="number" className=' text-center font-medium rounded-xl ml-5 h-10 w-64' />
                    </div>
                    {!installationHeight && invalidMeasurement} */}
                    <div className="button mt-5 flex justify-center gap-4">
                        <button onClick={() => setModel(0)} className='h-10 w-32 border rounded-3xl font-semibold text-lg text-[#818387] bg-white hover:bg-[#818387] hover:text-white'>BACK</button>
                        <button className={`h-10 w-32 border rounded-3xl font-semibold text-lg text-white ${(height && width) ? 'bg-[#2553A8] hover:bg-white hover:text-[#2553A8] duration-200' : 'bg-[#808386]'}`} onClick={next}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model2