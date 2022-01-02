import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
const BioPageHeader = () => {
    useEffect(() => {
        console.log(document.title)
    },[])
    return (
        <div className='flex justify-center my-5'>
            <Link to="/" className=''><img src={logo} alt="" /></Link>
        </div>
    )
}

export default BioPageHeader
