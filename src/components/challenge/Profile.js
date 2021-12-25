import React from 'react'
import { Navbar } from "./Navbar";
import Button from 'react-bootstrap/Button'
import { startLogout } from '../../actions/auth';
import { useSelector, useDispatch } from "react-redux";


export const Profile = () => {
    const dispatch = useDispatch()
    const {name, photo} = useSelector((state) => state.auth);
    const handleLogout = () => {
        console.log("ok")
        dispatch(startLogout())
    }
    return (

        <div className='container-p'>
            <img src={photo} className='userPhoto'/>
            <p>{name}</p>
            <p>Partidas jugadas:</p>
            <p>Partidas ganadas:</p>
            <p>Total Acumulado:</p>
            <Button className="danger" onClick={() => handleLogout()}>Log Out</Button>

            <Navbar />
        </div>
    )
}
