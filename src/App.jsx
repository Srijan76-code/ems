
import React from 'react'
import Login from './components/Auth/Login'
import Navbar from './components/Dashboard/Navbar'
import SideNavbar from './components/Dashboard/SideNavbar'
import Prioritycard from './components/Dashboard/Prioritycard'
import OngoingTask from './components/TaskList/Ongoingtask'

const App = () => {
  return (
    <>






      <div className="flex">

        <SideNavbar></SideNavbar>
        <div className="flex w-[82%] flex-col ">
          <Navbar></Navbar>
          <Prioritycard></Prioritycard>
          <Prioritycard></Prioritycard>
          <div className="w-[97%] h-[1px] bg-white m-auto mt-12 "></div>
          <OngoingTask></OngoingTask>
          
        </div>
      </div>
    </>
  )
}

export default App
