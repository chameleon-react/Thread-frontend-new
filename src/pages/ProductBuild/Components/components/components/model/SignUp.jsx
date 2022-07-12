import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setUsername,setEmail,setFName,setLName,setMobile,setPassword} from '../../../../../../redux/slice/userDetails'
import Address from './Address'

function SignUp({setSignUp}) {
    const dispatch = useDispatch()
    const [address, setAddress] = useState(false)
    const [passwords, setpasswords] = useState({
        password:"",
        repassword:""
    })
    const formHandler =()=>{
        if(passwords.password === passwords.repassword){
            if(passwords.password.length>=8){
            dispatch(setPassword(passwords.password))
            setAddress(true)
        } else window.alert("Password should be 8 charecter")
        } else window.alert("Password is Not matching")
    }
    const {username, email, fName, lName, mobile} = useSelector(state=>state.user)
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
                        <span className='text-2xl font-semibold' onClick={() => {setSignUp(false)}}>X</span>
                    </div>

                </div>
                <div className="w-full form flex flex-col items-center">
                    <form onSubmit={e=>{e.preventDefault(); formHandler()}} className='flex flex-col gap-5 mt-5 w-[50%]'>
                        <div className="username flex gap-10 justify-center font-medium w-full ">
                            <label className='w-1/2' htmlFor="username">Username</label>
                            <input value={username} onChange={e=>dispatch(setUsername(e.target.value))} required placeholder='Username' className='h-10 text-center border rounded-md w-56' type="text" id='username' />
                        </div>
                        <div className="email flex gap-10 justify-center font-medium w-full ">
                            <label className='w-1/2' htmlFor="email">Email</label>
                            <input value={email} onChange={e=>dispatch(setEmail(e.target.value))} required placeholder='Email' className='h-10 text-center border rounded-md w-56' type="email" id="email" />
                        </div>
                        <div className="fnam flex gap-10 justify-center font-medium w-full ">
                            <label className='w-1/2' htmlFor="fname">F Name</label>
                            <input value={fName} onChange={e=>dispatch(setFName(e.target.value))} required placeholder='F Name' className='h-10 text-center border rounded-md w-56' type="text"  id="fname" />
                        </div>
                        <div className="lname flex gap-10 justify-center font-medium w-full ">
                        <label className='w-1/2' htmlFor="lname">L Name</label>
                            <input value={lName} onChange={e=>dispatch(setLName(e.target.value))} required placeholder='L name' className='h-10 text-center border rounded-md w-56' type="text"  id="lname" />
                        </div>
                        <div className="phone flex gap-10 justify-center font-medium w-full ">
                        <label className='w-1/2' htmlFor="phone">Mobile</label>
                            <input value={mobile} onChange={e=>dispatch(setMobile(e.target.value))} required placeholder='Mobile No' className='h-10 text-center border rounded-md w-56' type={'number'}  id="phone" />
                        </div>
                        <div className="address">

                        </div>
                        <div  className="password flex gap-10 justify-center font-medium w-full ">
                            <label className='w-1/2' htmlFor="password">Password</label>
                            <input onChange={e=>{setpasswords({...passwords,password:e.target.value})}} value={passwords.password} required placeholder='Password' className='h-10 text-center border rounded-md w-56' type="password"  id="password" />
                        </div>
                        <div className="repassword flex gap-10 justify-center font-medium w-full ">
                            <label className='w-1/2' htmlFor="repassword">Password</label>
                            <input onChange={e=>{setpasswords({...passwords,repassword:e.target.value})}} value={passwords.repassword} required placeholder='Re password' className='h-10 text-center border rounded-md w-56' type="password"  id="repassword" />
                        </div>
                        <div className="submit w-full h-full flex justify-center">
                            <button className='border w-24 h-10 rounded-xl' type='submit' >Sign up</button>
                        </div>
                    </form>
                    {
                        address && <Address setAddress={setAddress}/>
                    }
                </div>
            </div>
        </div>

    )
}

export default SignUp