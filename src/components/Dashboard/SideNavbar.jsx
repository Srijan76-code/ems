import React from 'react'

const SideNavbar = () => {
    return (
        <>
            <div className="bg-[#101010] w-[18%] z-20 text-white drop-shadow-3xl shadow-black border-2 border-black ">
                <div className="">
                    {/* <img src="#" alt="EMS" /> */}
                    <div className="flex w-full ml-12 text-2xl  mt-8">EMS</div>
                </div>

                <div className='w-full flex flex-col justify-self-start mt-28 ml-7 gap-12' >
                    <div className=" hover:text-amber-100 flex gap-2 items-center cursor-pointer ">
                        <img className='h-5 w-5 text-[#00D6A2] ' src="../../admin-images/dashboard.png" alt="" />
                        <div className="">Dashboard</div>
                    </div>

                    <div className=" hover:text-amber-100 flex gap-2 items-center cursor-pointer">
                        <img className='h-7 w-7 text-[#00D6A2] rounded-full ' src="../../admin-images/professionals.png" alt="" />
                        <div className="">Team</div>
                    </div>
                    <div className=" hover:text-amber-100 flex gap-2 items-center cursor-pointer">
                        <img className='h-5 w-5 text-[#00D6A2] ' src="../../admin-images/comments.png" alt="" />
                        <div className="">Messages</div>
                    </div>
                    <div className=" hover:text-amber-100 flex gap-2 items-center cursor-pointer">
                        <img className='h-5 w-5 text-[#00D6A2] ' src="../../admin-images/schedule.png" alt="" />
                        <div className="">Calendar</div>
                    </div>
                    <div className=" hover:text-amber-100 flex gap-2 items-center cursor-pointer">
                        <img className='h-5 w-5 text-[#00D6A2] ' src="../../admin-images/folder.png" alt="" />
                        <div className="">Files</div>
                    </div>

                </div>

                <div className="w-[70%] h-[1px] bg-white ml-5 my-10  "></div>

                <div className=" hover:text-red-800 font-semibold flex gap-2 ml-7 items-center cursor-pointer">
                    <img className='h-5 w-5 text-[#00D6A2] ' src="../../admin-images/turn-off.png" alt="" />
                    <div className="">Logout</div>
                </div>


                <div className="w-[70%] h-[1px] bg-white ml-5 my-10  "></div>


                <div className="bg-black w-[80%] h-auto px-4 py-8 rounded-2xl ml-5 mt-40 flex flex-col items-center shadow-xl shadow-black ">
                    <img  className='h-8 w-8 text-[#00D6A2] mb-5 cursor-pointer ' src="../../admin-images/tab.png" alt="" />
                    <div className="">Create New Project</div>
                    <div className="">Or use <span className='text-amber-100 cursor-pointer ' >invite link</span> </div>
                </div>
            </div>
        </>
    )
}

export default SideNavbar
