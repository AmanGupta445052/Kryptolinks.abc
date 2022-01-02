import React, { useContext, useEffect } from 'react'
import CardSection from '../components/CardSection/CardSection'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/Header/NavBar'
import { UserContext } from '../context/context'

const home = () => {
    const {checkIfWalletIsConnected} = useContext(UserContext)
    useEffect(() => {
        checkIfWalletIsConnected();
    },[])
    return (
        <div>
            <NavBar />
            <Header />
            <CardSection />
            <Footer />
        </div>
    )
}

export default home
