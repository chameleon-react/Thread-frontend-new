import React, { useState } from 'react'
import Model1 from './model/Model1'
import Model2 from './model/Model2'
import Model3 from './model/Model3'


function MyModel({ setShowMyModel }) {
    const [model, setModel] = useState(0)
    return (
        <>

            {model === 0 && <Model1 setShowMyModel={setShowMyModel} setModel={setModel} />}
            {model === 1 && <Model2 setShowMyModel={setShowMyModel} setModel={setModel} />}
            {model === 2 && <Model3 setShowMyModel={setShowMyModel} />}
        </>
    )
}

export default MyModel