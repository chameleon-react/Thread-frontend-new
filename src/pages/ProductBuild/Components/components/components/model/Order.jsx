import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import backendIp from '../../../../../../backendIp'

function Order({setConfirmOrder}) {
    const { fabricType, pairOrNot, lining, look } = useSelector(state => state.fabric)
    const { measurementItem, windowName, width, height, } = useSelector(state => state.measurement)
    const { makingPrice, boxingPrice, totalPrice } = useSelector(state => state.price)
    const {username} = useSelector(state=>state.user)
    axios.post(`${backendIp}/user/order`,{
        username,
        fabric:fabricType.split('.')[0],
        type:measurementItem,
        measurement:`${height}*${width}(${windowName})`,
        pannel:pairOrNot,
        style:look,
        features:lining,
        makingPrice:Math.round(makingPrice*100)/100,
        boxingAndPostal:boxingPrice,
        totalPrice
    }).then(res=>{
        if(res.data){
            window.alert("Order is placed")
            window.location.href = '/productBuilder'
        }else window.alert("Something is error")
    })
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm'>
            <div className={` h-[40rem] bg-[#F8F9FA] w-[40rem] rounded-3xl`}>
                <div className="MainBar bg-white h-20 w-full flex justify-center items-center gap-14 rounded-t-3xl">
                    <div className=''>

                    </div>
                    <div className="title font-semibold text-2xl">
                        Confirm Your Order
                    </div>
                    <div className="cross ml-5">
                        <span className='text-2xl font-semibold' onClick={() => { setConfirmOrder(false) }}>X</span>
                    </div>
                </div>
                <div className="qn w-full flex justify-center mt-10 font-semibold">
                    <span>veryfy your order</span>
                </div>
                <div className="button w-full flex justify-center mt-10">
                <button className='h-10 w-32 border rounded-3xl font-semibold text-lg text-white bg-[#2553A8] hover:bg-white hover:text-[#2553A8] duration-75 ' onClick={()=>{window.location.href='/productBuilder'}}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Order