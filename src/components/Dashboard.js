import React from 'react';
import {Routes, Route} from 'react-router';
// import Secret from './Secret';
import Header from './front/Header/Header';

function Dashboard() {
  return (
    <div>
        {/* <Routes>
            <Route path='/Header' element={<Header  />}/>
        </Routes> */}

        <Header/>

    </div>
  )
}

export default Dashboard