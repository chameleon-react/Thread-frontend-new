import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {setFabricStyle} from '../../../../../../redux/slice/price'
function Model3({ setShowMyModel }) {
    const { windowName, measurementItem, hasPole, width, height } = useSelector(state => state.measurement)
    const dispatch = useDispatch()
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm'>
            <div className={` h-[40rem] bg-[#F8F9FA] w-[40rem] rounded-3xl`}>
                <div className="MainBar bg-white h-20 w-full flex justify-center items-center gap-14 rounded-t-3xl">
                    <div className=''>

                    </div>
                    <div className="title font-semibold text-2xl   ">
                        Window measurements added
                    </div>
                    <div className="cross ml-5">
                        <span className='text-2xl font-semibold' onClick={() => setShowMyModel(false)}>X</span>
                    </div>

                </div>
                <div className="flex justify-center mt-5">
                    <div className="details h-60 w-[80%] bg-white rounded-xl">
                        <div className="main h-12 items-center justify-around gap-72  flex ">
                            <span className=' font-semibold text-lg'>{windowName}</span>
                            <span></span>
                        </div>
                        <hr />
                        <div className="flex m-10 gap-5">
                            <div className="left">
                                <img src="/blinds.svg" alt="" />
                            </div>
                            <div className="right flex flex-col gap-3">
                                <div className="up flex gap-5">
                                    <div className="left flex flex-col">
                                        <span className='font-semibold'>Blind Or Curtain</span>
                                        <span >{measurementItem}</span>
                                    </div>
                                    <div className="right flex-col flex">
                                        <span className='font-semibold'>Has Pole</span>
                                        <span>{hasPole}</span>
                                    </div>
                                </div>
                                <div className="down">
                                    <span className='font-semibold'>Measurements</span>
                                    <div className="flex gap-10">
                                        <div className="h">
                                            <span className='font-semibold'>H : </span>
                                            <span>{`${height}CM `}</span>
                                        </div>
                                        <div className="w">
                                            <span className='font-semibold'>W : </span>
                                            <span >{`${width - 50}CM`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close flex justify-center mt-10">
                    <button onClick={() => {dispatch(setFabricStyle('pencil'));setShowMyModel(false)}} className={`h-10 w-32 border rounded-3xl font-semibold text-lg text-white  bg-[#2553A8] hover:bg-white hover:text-[#2553A8] duration-200`} >Close</button>
                </div>
            </div>
        </div>

    )
}

export default Model3