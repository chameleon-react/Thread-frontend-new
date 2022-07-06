import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    measurementItem: '',
    curtainType: '',
    hasPole: 'yes',
    blindType: '',
    typeOfRoom: '',
    windowName: '',
    width: '',
    height: '',
    installationHeight: '',
}

const measurement = createSlice({
    name: 'measurement',
    initialState,
    reducers: {
        setCurtainType: (state, action) => {
            state.curtainType = action.payload
        },
        setHasPole: (state, action) => {
            state.hasPole = action.payload
        },
        setBlindType: (state, action) => {
            state.blindType = action.payload
        },
        setTypeOfRoom: (state, action) => {
            state.typeOfRoom = action.payload
        },
        setWindowName: (state, action) => {
            state.windowName = action.payload
        },
        setWidth: (state, action) => {
            state.width = action.payload
        },
        setHeight: (state, action) => {
            state.height = action.payload
        },
        setMeasurementItem: (state, action) => {
            state.measurementItem = action.payload
        },
        setInstallationHeight: (state, action) => {
            state.installationHeight = action.payload
        }
    }
});

export const { setMeasurementItem, setCurtainType, setHasPole, setBlindType, setTypeOfRoom, setWindowName, setWidth, setHeight,setInstallationHeight } = measurement.actions

export default measurement.reducer