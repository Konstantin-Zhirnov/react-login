import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { logout } from '../context/authActions'
import { useDispatch } from "react-redux"


const Logout = () => {
	const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout())
      })
    return <Redirect to={'/'} />	
}

export default Logout