import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLook } from '../../../../../redux/slice/fabricSlice'
import { setFabricStyle } from '../../../../../redux/slice/price'

function Look() {
    const dispatch = useDispatch()
    const { look } = useSelector(state => state.fabric)
    useEffect(() => {
        dispatch(setLook('pencil'))
    }, [])
    return (
        <>
            <div className="look ">
                <span className='font-semibold text-lg'>What look are you going for?</span>
            </div>
            <div className="flex gap-5 justify-center flex-wrap">

                <div className="img h-24 w-24 " onClick={()=>dispatch(setFabricStyle('pencil'))}>
                    <img className={`${look !== 'pencil' && 'hidden'}`} src='/image/look/Pencils.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                    <img className={`${look === 'pencil' && 'hidden'}`} src='/image/look/pencil.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                </div>
                {/* <div className="img h-24 w-24" onClick={()=>dispatch(setFabricStyle('cartridge'))}>
                    <img className={`${look !== 'cartridge' && 'hidden'}`} src='/image/look/Cartridges.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                    <img className={`${look === 'cartridge' && 'hidden'}`} src='/image/look/cartridge.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                </div> */}
                <div className="img h-24 w-24" onClick={()=>dispatch(setFabricStyle('double'))}>
                    <img className={`${look !== 'double' && 'hidden'}`} src='/image/look/Doubles.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                    <img className={`${look === 'double' && 'hidden'}`} src='/image/look/double.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                </div>
                <div className="img h-24 w-24" onClick={()=>dispatch(setFabricStyle('eyelet'))}>
                    <img className={`${look !== 'eyelet' && 'hidden'}`} src='/image/look/Eyelets.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                    <img className={`${look === 'eyelet' && 'hidden'}`} src='/image/look/eyelet.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                </div>
                <div className="img h-24 w-24" onClick={()=>dispatch(setFabricStyle('goblet'))}>
                    <img className={`${look !== 'goblet' && 'hidden'}`} src='/image/look/Goblets.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                    <img className={`${look === 'goblet' && 'hidden'}`} src='/image/look/goblet.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                </div>
                <div className="img h-24 w-24" onClick={()=>dispatch(setFabricStyle('triple'))}>
                    <img className={`${look !== 'triple' && 'hidden'}`} src='/image/look/Triples.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                    <img className={`${look === 'triple' && 'hidden'}`} src='/image/look/triple.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                </div>
                {/* <div className="img h-24 w-24" onClick={()=>dispatch(setFabricStyle('wave'))}>
                    <img className={`${look !== 'wave' && 'hidden'}`} src='/image/look/Waves.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                    <img className={`${look === 'wave' && 'hidden'}`} src='/image/look/wave.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                </div> */}
            </div>
        </>
    )
}

export default Look