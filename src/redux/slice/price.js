import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fabricInitialCost: 200,
    totalPrice: 250,
    dummyPrice: 200,
    width: 50,
    height: 100,
    style: '',
    boxingPrice:50,
    makingPrice:2.35
}

const price = createSlice({
    name: 'Price',
    initialState,
    reducers: {
        setFabricInitialPrice: (state, action) => {
            state.fabricInitialCost = action.payload
            state.totalPrice = action.payload 
            state.dummyPrice = action.payload
        },
        setPriceByHeightAndWidth: (state, action) => {
            const { width, height } = action.payload
            state.height = height
            state.width = width
        },
        setFabricStyle: (state, action) => {
            state.totalPrice = state.dummyPrice
            const priceList1 = [
                ['', 137, 205, 274, 342, 411, 480, 548],
                [91, 41.59, 60.22, 78.89, 97.52, 116.20, 142.63, 153.50],
                [122, 42.17, 61.10, 80.07, 99.00, 117.97, 145.00, 155.86],
                [137, 54.06, 78.63, 103.19, 127.78, 152.34, 188.98, 201.48],
                [152, 66.05, 96.09, 126.13, 156.16, 186.20, 231.09, 246.26],
                [183, 73.22, 106.81, 140.47, 174.07, 207.72, 259.80, 274.98],
                [213, 74.02, 108.02, 142.06, 176.06, 210.12, 262.98, 278.17],
                [229, 74.45, 108.66, 142.92, 177.11, 211.40, 264.69, 279.87],
                [244, 76.24, 110.74, 145.24, 179.76, 214.25, 269.34, 283.27],
                [274, 76.97, 111.84, 146.71, 181.58, 216.45, 272.28, 286.20],
                [305, 85.28, 123.43, 161.62, 199.75, 237.94, 300.34, 314.27]]
            const priceList2 = [
            ['', 137, 205, 274, 342, 411, 480, 548],
            [91, 83.76, 112.06, 138.18, 165.42, 200.41, 219.84, 219.84],
            [122, 84.64, 113.24, 139.66, 167.19, 202.78, 222.20, 222.20],
            [137, 105.70, 141.34, 174.53, 208.94, 255.43, 277.77, 277.77],
            [152, 134.88, 179.65, 221.96, 265.50, 325.71, 352.59, 352.59],
            [183, 146.91, 195.75, 242.05, 289.66, 357.93, 384.80, 384.80],
            [213, 148.26, 197.53, 244.29, 292.34, 361.50, 388.38, 388.38],
            [229, 148.98, 198.49, 245.47, 293.78, 363.42, 390.29, 390.29],
            [244, 151.31, 201.10, 248.44, 296.98, 368.63, 394.10, 394.10],
            [274, 152.55, 202.75, 250.48, 299.45, 371.93, 397.39, 397.39],
            [305, 165.55, 219.47, 270.87, 323.56, 403.42, 428.89, 428.89]]
            if (action.payload === 'pencil') {
                const width = [137, 205, 274, 342, 411, 480, 548];
                const height = [91, 122, 137, 152, 183, 213, 229, 244, 274, 305]
                const priceList = priceList1
                const wid = width.map(e => e > state.width && e).filter(Boolean)
                const hei = height.map(e => e > state.height && e).filter(Boolean)
                const widIndex = width.indexOf(wid[0])
                const hieIndex = height.indexOf(hei[0])
                const cost = state.totalPrice + priceList[widIndex + 2][hieIndex]
                state.totalPrice = Math.round(cost * 100*state.makingPrice) / 100
            }
            else if (action.payload === 'double') {
                const priceList = priceList2
                const width = [137, 205, 274, 342, 411, 480, 548]
                const height = [91, 122, 137, 152, 183, 213, 229, 244, 274, 305]
                const wid = width.map(e => e > state.width && e).filter(Boolean)
                const hei = height.map(e => e > state.height && e).filter(Boolean)
                const widIndex = width.indexOf(wid[0])
                const hieIndex = height.indexOf(hei[0])
                const cost = state.totalPrice + priceList[widIndex + 2][hieIndex]
                state.totalPrice = Math.round(cost * 100*state.makingPrice) / 100
            }
            else if (action.payload === 'eyelet') {
                const priceList = priceList1
                const width = [137, 205, 274, 342, 411, 480, 548]
                const height = [91, 122, 137, 152, 183, 213, 229, 244, 274, 305]
                const wid = width.map(e => e > state.width && e).filter(Boolean)
                const hei = height.map(e => e > state.height && e).filter(Boolean)
                const widIndex = width.indexOf(wid[0])
                const hieIndex = height.indexOf(hei[0])
                const cost = state.totalPrice + priceList[widIndex + 2][hieIndex]
                state.totalPrice = (Math.round((cost+50) * 100*state.makingPrice) / 100)
            }
            else if (action.payload === 'goblet') {
                const priceList = priceList2
                const width = [137, 205, 274, 342, 411, 480, 548]
                const height = [91, 122, 137, 152, 183, 213, 229, 244, 274, 305]
                const wid = width.map(e => e > state.width && e).filter(Boolean)
                const hei = height.map(e => e > state.height && e).filter(Boolean)
                const widIndex = width.indexOf(wid[0])
                const hieIndex = height.indexOf(hei[0])
                const cost = state.totalPrice + priceList[widIndex + 2][hieIndex]
                state.totalPrice = Math.round(cost * 100*state.makingPrice) / 100
            }
            else if (action.payload === 'triple') {
                const priceList = priceList2
                const width = [137, 205, 274, 342, 411, 480, 548]
                const height = [91, 122, 137, 152, 183, 213, 229, 244, 274, 305]
                const wid = width.map(e => e > state.width && e).filter(Boolean)
                const hei = height.map(e => e > state.height && e).filter(Boolean)
                const widIndex = width.indexOf(wid[0])
                const hieIndex = height.indexOf(hei[0])
                const cost = state.totalPrice + priceList[widIndex + 2][hieIndex]
                state.totalPrice = Math.round(cost * 100*state.makingPrice) / 100
            }
        }
    }
});

export const { setFabricInitialPrice, setPriceByHeightAndWidth, setFabricStyle } = price.actions

export default price.reducer