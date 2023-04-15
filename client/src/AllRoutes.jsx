import React from 'react'
import{ Route,Routes} from 'react-router-dom'

import Timer from './components/Timer/Timer'
import Auth from './components/Auth/Auth'


const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Auth />} />
    <Route path='/Timer' element={<Timer/>}/>
    </Routes>

  )
}

export default AllRoutes