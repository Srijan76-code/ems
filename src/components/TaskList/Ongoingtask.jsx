
import React from 'react'

const OngoingTask = () => {
    return (
        <>
            <div className="bg-[#101010]  flex flex-col text-white m-14 pb-16 rounded-2xl shadow-black shadow-2xl">

                <div className="flex justify-between pt-10  px-20 ">

                    <div className="text-3xl font-bold">Projects</div>
                    <div className="flex  ">
                        <button className='bg-[#F4CB8E] text-black text-sm font-bold px-4 rounded-xl cursor-pointer' >Ongoing</button>
                        <button className='bg-[#1B1B1B] text-[#F4CB8E] text-sm font-bold  px-4 rounded-xl cursor-pointer' >Pending</button>
                    </div>
                </div>

                <div className="flex flex-wrap m-auto   text-white mt-12  gap-12">

                    <div className="bg-[#171717] w-[450px] shrink-0   p-6 rounded-xl flex-col ">

                        <div className="flex gap-5 ml-4 ">
                            <div className="rounded-full bg-black w-14 h-14 flex justify-center items-center">
                                <img className='w-10 h-10 p-2  ' src="./../../admin-images/startup.PNG" alt="" /></div>
                            <div className="flex-col ">
                                <div className="mb-1">Startup Web with Responsive</div>
                                <div className="flex items-center ">
                                    <img className='w-5 h-5 mr-2  ' src="./../../admin-images/clock.PNG" alt="" />
                                    <div className="text-neutral-400 text-sm">12:00 pm - 8:30 pm</div>
                                </div>
                            </div>

                        </div>
                        <div className="text-center m-3">Progress Bar</div>
                        <div className="flex  justify-between">
                            <div className="flex ml-2 ">
                                <img className=' w-11 h-11 relative    ' src="https://yeshivanj.com/wp-content/uploads/2020/07/639-6399637_henry-circle-gentleman.png" alt="" />
                                <img className='w-11 h-11  relative right-4 ' src="https://yeshivanj.com/wp-content/uploads/2020/07/639-6399637_henry-circle-gentleman.png" alt="" />
                                <img className=' w-11 h-11 relative right-8   ' src="https://yeshivanj.com/wp-content/uploads/2020/07/639-6399637_henry-circle-gentleman.png" alt="" />
                                <img className='w-11 h-11  relative right-12 ' src="https://yeshivanj.com/wp-content/uploads/2020/07/639-6399637_henry-circle-gentleman.png" alt="" />
                            </div>

                            <button className='bg-[#242424] text-[#F4CB8E] text-sm px-5 py-3 rounded-md cursor-pointer'>View Project</button>
                        </div>


                    </div>

                    <div className="bg-[#171717] w-[450px] shrink-0   p-6 rounded-xl flex-col ">

                        <div className="flex gap-5 ml-4 ">
                            <div className="rounded-full bg-black w-14 h-14 flex justify-center items-center">
                                <img className='w-10 h-10 p-2  ' src="./../../admin-images/startup.PNG" alt="" /></div>
                            <div className="flex-col ">
                                <div className="mb-1">Startup Web with Responsive</div>
                                <div className="flex items-center ">
                                    <img className='w-5 h-5 mr-2  ' src="./../../admin-images/clock.PNG" alt="" />
                                    <div className="text-neutral-400 text-sm">12:00 pm - 8:30 pm</div>
                                </div>
                            </div>

                        </div>
                        <div className="text-center m-3">Progress Bar</div>
                        <div className="flex  justify-between">
                            <div className="flex ml-2 ">
                                <img className=' w-11 h-11 relative    ' src="https://yeshivanj.com/wp-content/uploads/2020/07/639-6399637_henry-circle-gentleman.png" alt="" />
                                <img className='w-11 h-11  relative right-4 ' src="https://yeshivanj.com/wp-content/uploads/2020/07/639-6399637_henry-circle-gentleman.png" alt="" />
                                <img className=' w-11 h-11 relative right-8   ' src="https://yeshivanj.com/wp-content/uploads/2020/07/639-6399637_henry-circle-gentleman.png" alt="" />
                                <img className='w-11 h-11  relative right-12 ' src="https://yeshivanj.com/wp-content/uploads/2020/07/639-6399637_henry-circle-gentleman.png" alt="" />
                            </div>

                            <button className='bg-[#242424] text-[#F4CB8E] text-sm px-5 py-3 rounded-md cursor-pointer'>View Project</button>
                        </div>


                    </div>





                </div>
            </div>
        </>
    )
}

export default OngoingTask
