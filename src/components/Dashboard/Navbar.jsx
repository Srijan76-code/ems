import React from 'react'

const Navbar = () => {
  return (
    <>


        <div className='bg-[#101010] w-full h-22 text-white flex justify-between px-16  ' >
            <div className="flex w-[40%] gap-3 items-center ">
                <input className='bg-[#181818] px-5 py-3 w-full rounded-md text-sm text-neutral-200 shadow-2xl shadow-black outline-0  ' type="text" placeholder='Search' />
                <img className='h-8 w-8 relative right-[60px] text-[#00D6A2] ' src="./ems/admin-images/search.png" alt="" />

            </div>
            <div className="flex gap-3 items-center">
                <img className='h-14 w-14 shadow-xl rounded-full shadow-black' src="./ems/admin-images/login.png" alt="" />
                <div className="text-base ">
                    <div className="text-white  ">Srijan Patel</div>
                    <div className="text-sm text-neutral-400">Project Manager</div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Navbar
