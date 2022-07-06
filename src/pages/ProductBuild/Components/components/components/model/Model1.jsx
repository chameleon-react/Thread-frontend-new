import { useSelector, useDispatch } from 'react-redux'
import { setMeasurementItem, setCurtainType, setBlindType, setTypeOfRoom, setWindowName } from '../../../../../../redux/slice/measurement'
import { useState } from 'react'

function Model1({ setShowMyModel, setModel }) {
    const { measurementItem, curtainType, blindType, typeOfRoom, windowName } = useSelector(state => state.measurement)
    const dispatch = useDispatch()
    const next = () => {
        if (measurementItem && typeOfRoom && windowName && (curtainType || blindType)) {
            setModel(1)
        }
    }
    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm'>
                <div className={`${typeOfRoom === '' ? 'h-[40rem]' : 'h-[45rem]'} bg-[#F8F9FA] w-[40rem] rounded-3xl`}>
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
                    <div className="form h-full w-full flex flex-col items-center">
                        <div className="qn font-medium mt-4">
                            What are you measuring for?
                        </div>
                        <div className="ans flex gap-5 mt-4">
                            <div onClick={() => dispatch(setMeasurementItem('curtain'))} className="curtain w-24 h-24 ">
                                <img className={`${measurementItem !== 'curtain' && 'hidden'}`} src='/image/model/curtain_flat_selected.jpg' alt='' />
                                <img className={`${measurementItem === 'curtain' && 'hidden'}`} src='/image/model/curtain_flat_deselected.jpg' alt='' />
                            </div>
                            <div onClick={() => dispatch(setMeasurementItem('blind'))} className="blind w-24 h-24">
                                <img className={`${measurementItem !== 'blind' && 'hidden'}`} src='/image/model/blinds_outside_selected.jpg' />
                                <img className={`${measurementItem === 'blind' && 'hidden'}`} src='/image/model/blinds_outside_deselected.jpg' />
                            </div>
                        </div>
                        {measurementItem !== '' && <>
                            <div className='qn font-medium mt-4'>
                                {measurementItem === 'curtain' ? 'What kind of window to you have?' : 'How will your blinds be installed?'}

                            </div>
                            {measurementItem === 'curtain' && <div className='ans flex gap-5 mt-4'>
                                <div className="flat w-24 h-24" onClick={() => dispatch(setCurtainType('flat'))}>
                                    <img className={`${curtainType !== 'flat' && 'hidden'}`} src='/image/model/curtain_flat_selected.jpg' alt='' />
                                    <img className={`${curtainType === 'flat' && 'hidden'}`} src='/image/model/curtain_flat_deselected.jpg' alt='' />
                                </div>
                                <div className="bay w-24 h-24" onClick={() => dispatch(setCurtainType('bay'))}>
                                    <img className={`${curtainType !== 'bay' && 'hidden'}`} src='/image/model/curtain_bay_selected.jpg' alt='' />
                                    <img className={`${curtainType === 'bay' && 'hidden'}`} src='/image/model/curtain_bay_deselected.jpg' alt='' />
                                </div>
                            </div>}
                            {measurementItem === 'blind' && <div className='ans flex gap-5 mt-4'>
                                <div className="flat w-24 h-24" onClick={() => dispatch(setBlindType('inside'))}>
                                    <img className={`${blindType !== 'inside' && 'hidden'}`} src='/image/model/blinds_inside_selected.jpg' alt='' />
                                    <img className={`${blindType === 'inside' && 'hidden'}`} src='/image/model/blinds_inside_deselected.jpg' alt='' />
                                </div>
                                <div className="bay w-24 h-24" onClick={() => dispatch(setBlindType('outside'))}>
                                    <img className={`${blindType !== 'outside' && 'hidden'}`} src='/image/model/blinds_outside_selected.jpg' alt='' />
                                    <img className={`${blindType === 'outside' && 'hidden'}`} src='/image/model/blinds_outside_deselected.jpg' alt='' />
                                </div>
                            </div>}
                        </>}
                        <div className="roomType flex flex-col items-center">
                            <div className="qn font-medium mt-4">
                                What type of room is this for?
                            </div>
                            <div className="ans flex flex-wrap gap-3 justify-center mt-4">
                                <button className={`h-10 border rounded-lg w-32 bg-white font-medium ${typeOfRoom === 'Living Room' && 'border-blue-700 border-2 text-blue-700'}`} onClick={() => { dispatch(setTypeOfRoom('Living Room')); dispatch(setWindowName('Living Room')) }} >LIVING ROOM</button>
                                <button className={`h-10 border rounded-lg w-32 bg-white font-medium ${typeOfRoom === 'Bed Room' && 'border-blue-700 border-2 text-blue-700'}`} onClick={() => { dispatch(setTypeOfRoom('Bed Room')); dispatch(setWindowName('Bed Room')) }} >BEDROOM</button>
                                <button className={`h-10 border rounded-lg w-32 bg-white font-medium ${typeOfRoom === 'Study' && 'border-blue-700 border-2 text-blue-700'}`} onClick={() => { dispatch(setTypeOfRoom('Study')); dispatch(setWindowName('Study')) }} >STUDY</button>
                                <button className={`h-10 border rounded-lg w-32 bg-white font-medium ${typeOfRoom === 'Dining Room' && 'border-blue-700 border-2 text-blue-700'}`} onClick={() => { dispatch(setTypeOfRoom('Dining Room')); dispatch(setWindowName('Dining Room')) }} >DINING ROOM</button>
                                <button className={`h-10 border rounded-lg w-32 bg-white font-medium ${typeOfRoom === 'Kitchen' && 'border-blue-700 border-2 text-blue-700'}`} onClick={() => { dispatch(setTypeOfRoom('Kitchen')); dispatch(setWindowName('Kitchen')) }} >KITCHEN</button>
                                <button className={`h-10 border rounded-lg w-32 bg-white font-medium ${typeOfRoom === 'Bathroom' && 'border-blue-700 border-2 text-blue-700'}`} onClick={() => { dispatch(setTypeOfRoom('Bathroom')); dispatch(setWindowName('Bathroom')) }} >BATHROOM</button>
                                <button className={`h-10 border rounded-lg w-32 bg-white font-medium ${typeOfRoom === 'Other' && 'border-blue-700 border-2 text-blue-700'}`} onClick={() => { dispatch(setTypeOfRoom('Other')); dispatch(setWindowName('')) }} >OTHER</button>
                            </div>
                        </div>
                        <div className={`${typeOfRoom === '' && 'hidden'} roomname flex flex-col items-center`}>
                            <div className="qn font-medium mt-4">
                                Give this window a name!
                            </div>
                            <div className="ans flex justify-center mt-4">
                                <input className='h-12 w-96 rounded-lg border text-center' placeholder={`E.G. '${typeOfRoom}'`} type={'text'} onChange={e => { dispatch(setWindowName(e.target.value)) }} value={windowName} />
                            </div>
                        </div>
                        <div className="next mt-3 " >

                            <button className={`h-10 w-32 border rounded-3xl font-semibold text-lg text-white ${(measurementItem && typeOfRoom && windowName && (curtainType || blindType) ? 'bg-[#2553A8] hover:bg-white hover:text-[#2553A8] duration-200' : 'bg-[#808386]')}`} onClick={next}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model1