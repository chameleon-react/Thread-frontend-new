import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setaddress } from '../../../../../../redux/slice/userDetails'
function Address({ setAddress }) {
  const dispatch = useDispatch()
  const [address, setAddres] = useState({
    flatNo: '',
    place: '',
    landmark: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
  })
  const formHandler = () => {
    dispatch(setaddress(address))
  }
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm'>
      <div className={` h-[40rem] bg-[#F8F9FA] w-[40rem] rounded-3xl`}>
        <div className="MainBar bg-white h-20 w-full flex justify-center items-center gap-14 rounded-t-3xl">
          <div className=''>

          </div>
          <div className="title font-semibold text-2xl">
            Create an Account
          </div>
          <div className="cross ml-5">
            <span className='text-2xl font-semibold' onClick={() => { setAddress(false) }}>X</span>
          </div>
        </div>
        <div className="w-full form flex flex-col items-center">
          <form onSubmit={e => { e.preventDefault(); formHandler() }} className='flex flex-col gap-5 mt-5 w-[50%]'>

            <div className=" flex gap-10 justify-center font-medium w-full ">
              <label className='w-1/2' htmlFor="flatNo">Flat No</label>
              <input value={address.flatNo} onChange={e=>{setAddres({...address,flatNo:e.target.value})}} required placeholder='Flat No' className='h-10 text-center border rounded-md w-56' type="text" id='flatNo' />
            </div>

            <div className=" flex gap-10 justify-center font-medium w-full ">
              <label className='w-1/2' htmlFor="place">Place</label>
              <input value={address.place} onChange={e=>{setAddres({...address,place:e.target.value})}} required placeholder='Place' className='h-10 text-center border rounded-md w-56' type="text" id='place' />
            </div>

            <div className=" flex gap-10 justify-center font-medium w-full ">
              <label className='w-1/2' htmlFor="landMark">LandMark</label>
              <input value={address.landmark} onChange={e=>{setAddres({...address,landmark:e.target.value})}} required placeholder='LandMark' className='h-10 text-center border rounded-md w-56' type="text" id='landMark' />
            </div>

            <div className=" flex gap-10 justify-center font-medium w-full ">
              <label className='w-1/2' htmlFor="city">City</label>
              <input value={address.city} onChange={e=>{setAddres({...address,city:e.target.value})}} required placeholder='City' className='h-10 text-center border rounded-md w-56' type="text" id='city' />
            </div>

            <div className=" flex gap-10 justify-center font-medium w-full ">
              <label className='w-1/2' htmlFor="state">State</label>
              <input value={address.state} onChange={e=>{setAddres({...address,state:e.target.value})}} required placeholder='State' className='h-10 text-center border rounded-md w-56' type="text" id='state' />
            </div>

            <div className=" flex gap-10 justify-center font-medium w-full ">
              <label className='w-1/2' htmlFor="country">Country</label>
              <input value={address.country} onChange={e=>{setAddres({...address,country:e.target.value})}} required placeholder='Country' className='h-10 text-center border rounded-md w-56' type="text" id='country' />
            </div>

            <div className=" flex gap-10 justify-center font-medium w-full ">
              <label className='w-1/2' htmlFor="zipcode">Zipcode</label>
              <input value={address.zipcode} onChange={e=>{setAddres({...address,zipcode:e.target.value})}} required placeholder='Zipcode' className='h-10 text-center border rounded-md w-56' type="text" id='zipcode' />
            </div>
            <div className="submit w-full h-full flex justify-center">
              <button className='border w-24 h-10 rounded-xl' type='submit' >Sign up</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Address