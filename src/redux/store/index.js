import { configureStore } from '@reduxjs/toolkit'
import fabricSlice from '../slice/fabricSlice'
const store = configureStore({
    reducer: {
        'fabric': fabricSlice
    }
})

export default store