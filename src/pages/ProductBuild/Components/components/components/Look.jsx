import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLook } from '../../../../../redux/slice/fabricSlice'

function Look() {
    const dispatch = useDispatch()
    const { look } = useSelector(state => state.fabric)
    return (
        <>
            <div className="look ">
                <span className='font-semibold text-lg'>What look are you going for?</span>
            </div>
            <div className="flex gap-5 justify-center flex-wrap">
                {look === 'pencil' && <>
                    <div className="img h-24 w-24 ">
                        <img src='/image/look/Pencils.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/cartridge.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/double.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/eyelet.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/goblet.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/triple.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/wave.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                    </div>
                </>}
                {look === 'cartridge' && <>
                    <div className="img h-24 w-24 ">
                        <img src='/image/look/pencil.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                    </div>
                    <div className="img h-24 w-24 ">
                        <img src='/image/look/Cartridges.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/double.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/eyelet.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/goblet.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/triple.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/wave.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                    </div>
                </>}
                {look === 'double' && <>
                    <div className="img h-24 w-24">
                        <img src='/image/look/pencil.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/cartridge.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/Doubles.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/eyelet.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/goblet.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/triple.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/wave.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                    </div>
                </>}
                {look === 'eyelet' && <>
                    <div className="img h-24 w-24">
                        <img src='/image/look/pencil.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/cartridge.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/double.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/Eyelets.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/goblet.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/triple.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/wave.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                    </div>
                </>}
                {look === 'goblet' && <>
                    <div className="img h-24 w-24">
                        <img src='/image/look/pencil.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/cartridge.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/double.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/eyelet.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/Goblets.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/triple.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/wave.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                    </div>
                </>}
                {look === 'triple' && <>
                    <div className="img h-24 w-24">
                        <img src='/image/look/pencil.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/cartridge.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/double.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/eyelet.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/goblet.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/Triples.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/wave.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                    </div>
                </>}
                {look === 'wave' && <>
                    <div className="img h-24 w-24">
                        <img src='/image/look/pencil.svg' alt="" onClick={() => dispatch(setLook('pencil'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/cartridge.svg' alt='' onClick={() => dispatch(setLook('cartridge'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/double.svg' alt='' onClick={() => dispatch(setLook('double'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/eyelet.svg' alt='' onClick={() => dispatch(setLook('eyelet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/goblet.svg' alt='' onClick={() => dispatch(setLook('goblet'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/triple.svg' alt='' onClick={() => dispatch(setLook('triple'))} />
                    </div>
                    <div className="img h-24 w-24">
                        <img src='/image/look/Waves.svg' alt='' onClick={() => dispatch(setLook('wave'))} />
                    </div>
                </>}
            </div>
        </>
    )
}

export default Look