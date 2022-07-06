import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fabricInitialCost: 200,
    totalPrice: 200,
    width: '',
    height: '',
    style: ''
}

const price = createSlice({
    name: 'Price',
    initialState,
    reducers: {
        setFabricInitialPrice: (state, action) => {
            state.fabricInitialCost = action.payload
            state.totalPrice = action.payload
        },
        setPriceByHeightAndWidth: (state, action) => {
            const { width, height } = action.payload
            state.height = height
            state.width = width
        },
        setFabricStyle: (state, action) => {
            if (action.payload === 'pencil') {
                console.log('pencil')
            }
        }
    }
});

export const { setFabricInitialPrice, setPriceByHeightAndWidth, setFabricStyle } = price.actions

export default price.reducer