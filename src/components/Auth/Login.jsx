import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("Email :",email)
        console.log("Password :",password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className=' bg-[#00253E]  text-amber-100 w-full h-screen flex  justify-center  gap-6' >



            <form onSubmit={(e)=>{submitHandler(e)}} className=' bg-[#001A2C]  w-auto h-fit flex flex-col justify-center  gap-2 p-16 mt-20  rounded-2xl  shadow-xl shadow-black' >
                <div className="mb-4 self-center font-semibold text-3xl">Login</div>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id='email'
                    required
                    placeholder='Enter your Email'
                    value={email}
                    className='bg-[#00253E]  w-72 px-4 py-3 mb-4 rounded-md  placeholder:text-amber-100 placeholder:font-light  shadow-2xl shadow-black'
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    required
                    placeholder='Enter your Password'
                    value={password}
                    className='bg-[#00253E] w-72 px-4 py-3 mb-2 rounded-md placeholder:text-amber-100 placeholder:font-light    shadow-2xl shadow-black '
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button
                    className='bg-amber-200 text-black m-4 self-center   w-36 py-2 rounded-lg shadow-2xl shadow-black  '
                >Login</button>


                <div className="flex w-full justify-between ">
                    <div className=" h-[1px] w-full  bg-amber-100 "></div>
                    <div className=" relative top-[-13px] px-1.5 text-amber-100 ">or </div>
                    <div className=" h-[1px] w-full bg-amber-100 "></div>
                </div>



                <div className=" w-full flex justify-between ">
                    <button
                        className='  w-32 py-2 rounded-lg shadow-2xl shadow-black text-black  bg-amber-100 border-1 '
                    >Apple</button>
                    <button
                        className='  w-32 py-2 rounded-lg shadow-2xl shadow-black text-black  bg-amber-100 border-1 '
                    >Google</button>
                </div>
            </form>

        </div>
    )
}

export default Login
