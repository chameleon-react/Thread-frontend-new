import { configureStore } from '@reduxjs/toolkit'
import fabricSlice from '../slice/fabricSlice'
import measurement from '../slice/measurement'
import price from '../slice/price'
const store = configureStore({
    reducer: {
        'fabric': fabricSlice,
        measurement,
        price,
    }
})

export default store