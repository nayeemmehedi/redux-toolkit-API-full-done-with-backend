import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {incrementByAmount } from "../features/Counter/CounterSlice"


const Navbar = () => {

    const count2 = useSelector((state) => state.counter.nayeem)

  const dispatch = useDispatch()





    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <button onClick={() => dispatch(incrementByAmount(!count2))}>night mode</button>
         
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;