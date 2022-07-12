import { configureStore } from '@reduxjs/toolkit'
import fabricSlice from '../slice/fabricSlice'
import measurement from '../slice/measurement'
import price from '../slice/price'
import userDetails from '../slice/userDetails'
const store = configureStore({
    reducer: {
        'fabric': fabricSlice,
        measurement,
        price,
        user :userDetails
    }
})

export default store