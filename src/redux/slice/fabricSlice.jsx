import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fabricType: 'Porcelains.jpg',
    fabricColor: '#ffffff',
    look: 'pencil',
    pairOrNot: 'pair',
    lining: '',
    poleOrTrack: '',
    pooling: '',

}

const fabricSlice = createSlice({
    name: 'fabric',
    initialState,
    reducers: {
        setFabricType: (state, action) => {
            state.fabricType = action.payload
        },
        setFabricColor: (state, action) => {
            state.fabricColor = action.payload
        },
        setLook: (state, action) => {
            state.look = action.payload
        },
        setPairOrNot: (state, action) => {
            state.pairOrNot = action.payload
        },
        setLining: (state, action) => {
            state.lining = action.payload
        },
        setpoleOrTrack: (state, action) => {
            state.poleOrTrack = action.payload
        },
        setPooling: (state, action) => {
            state.pooling = action.payload
        }
    }
});

export const { setFabricColor, setFabricType, setLook, setPairOrNot, setLining, setpoleOrTrack, setPooling } = fabricSlice.actions

export default fabricSlice.reducer