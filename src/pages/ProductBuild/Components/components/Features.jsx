import React from 'react'
import { useState } from 'react'
import Lining from './components/Lining'
import Pole from './components/Pole'
import Pooling from './components/Pooling'

function Features({ setSelected }) {
  const [selector, setSelector] = useState(0)
  return (
    <>
      <div className='flex justify-center gap-10 font-semibold'>
        <div className="lining" onClick={() => setSelector(0)}>
          <span className={`${selector === 0 && 'text-[#2553a8]'} `}>Lining</span>
        </div>
        <div className="pole" onClick={() => setSelector(1)}>
          <span className={`${selector === 1 && 'text-[#2553a8]'} `}>Pole/Track</span>
        </div>
        <div className="pool" onClick={() => setSelector(2)}>
          <span className={`${selector === 2 && 'text-[#2553a8]'} `}>Pooling</span>
        </div>
      </div>
      <hr />
      {selector === 0 && <Lining setSelected={setSelected} setSelector={setSelector} />}
      {selector === 1 && <Pole setSelector={setSelector} />}
      {selector === 2 && <Pooling setSelector={setSelector} />}
    </>
  )
}

export default Features