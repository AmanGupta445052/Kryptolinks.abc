import React, { useContext } from 'react'
import BioPage from '../components/BioPage/BioPage'
import BioPageFooter from '../components/BioPage/BioPageFooter'
import BioPageHeader from '../components/BioPage/BioPageHeader'
import BioToast from '../components/BioPage/BioToast'
import { UserContext } from '../context/context'

const UserBioPage = () => {
  const { isPaymentCompleted } = useContext(UserContext);

    return (
        <div>
            <BioPageHeader />
            <BioPage />
            <BioPageFooter />
            {isPaymentCompleted ? <BioToast /> : null}
        </div>
    )
}

export default UserBioPage
