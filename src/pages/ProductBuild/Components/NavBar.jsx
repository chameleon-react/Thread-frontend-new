import React from 'react'

function NavBar() {
    return (
        <div className='h-[8vh] flex items-center'>
            <div className="logo  md:ml-[10%]">
                <img src='/thread-02.svg' className='h-full w-1/2' alt='' />
            </div>
            <div className="menu ml-[5%] md:ml-[20%]">
                <ul className='flex text-[#808387] gap-5 md:gap-16'>
                    <li>SHOP</li>
                    <li>FABRICS</li>
                    <li>INSPIRATION</li>
                    <li>NEED HELP?</li>
                </ul>
            </div>
            <div className="sampleButton hidden  md:block ml-[10%]">
                <button className='shadow-inner shadow-blue-500 font-semibold text-blue-700 w-32'>YOUR SAMPLE</button>
            </div>
        </div>
    )
}

export default NavBar