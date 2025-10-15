import React from 'react'

import Kids from './Kids'
import Electronics from './Electronics'
import Fashion from './Fashion'
import { Link, Route, Routes } from 'react-router-dom'

const Master = () => {
  return (
    <div>
      <Link to="/electronics">Electionics: </Link><br/>
      <Link to="/kids">Kids: </Link><br/>
      <Link to ="/fashion">Fashions: </Link><br/>
      <Routes>
        <Route path='/electronics' element={<Electronics></Electronics>}></Route>
        <Route path='/kids' element= {<Kids></Kids>}></Route>
        <Route path='/fashion' element= {<Fashion></Fashion>}></Route>
      </Routes>
    </div>
  )
}

export default Master