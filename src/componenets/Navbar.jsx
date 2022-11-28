import React from 'react'
import Switch from '@mui/material/Switch';

export default function Navbar({mode,setMode, data, setData}) {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-success">
    <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">{data.home}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">{data.dashboard}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">{data.products}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">{data.about}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">{data.servise}</a>
        </li>
        </ul>
        <select class="form-select" onClick={(e)=>setData(e.target.value)}>
            <option value="uz">O'zbek</option>
            <option value="eng">Ingliz</option>
            <option value="krill">Krill</option>
        </select>
        <li className='list-group-item text-light'> {mode==false?data.modecolor1:data.modecolor2} {data.mode}</li>
        <Switch onClick={()=>setMode(!mode)}/>
    </div>
    </div>
</nav>
        </>

    )
}
