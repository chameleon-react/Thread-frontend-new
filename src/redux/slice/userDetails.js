import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username:'',
    email:'',
    fName:'',
    lName:'',
    mobile:'',
    address:{
        flatNo:'',
        place:'',
        landmark:'',
        city:'',
        state:'',
        country:'',
        zipcode:'',
    },
    password:'',
}

const userDetails = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUsername:(state,action)=>{
        state.username = action.payload
    },
    setEmail:(state,action)=>{
        state.email = action.payload
    },
    setFName:(state,action)=>{
        state.fName = action.payload
    },
    setLName:(state,action)=>{
        state.lName = action.payload
    },setMobile:(state,action)=>{
        state.mobile = action.payload
    },
    setPassword:(state,action)=>{
        state.password = action.payload
    },
    setaddress:(state,action)=>{
        state.address = action.payload
    }
  }
});

export const {setUsername,setEmail,setFName,setLName,setMobile,setPassword,setaddress} = userDetails.actions

export default userDetails.reducer