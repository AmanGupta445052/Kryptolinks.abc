import React from 'react'
import Card from './Card'

import {IoMdAnalytics} from "react-icons/io"

const CardSection = () => {
    return (
        <div className='flex flex-wrap justify-center font-clash'>
            <Card icon={<IoMdAnalytics />} title="Dummy Title 1" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad illum, neque atque nobis fuga quasi magnam reprehenderit quae! Fuga exercitationem similique qui nam"/>
            <Card icon={<IoMdAnalytics />} title="Dummy Title 2" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad illum, neque atque nobis fuga quasi magnam reprehenderit quae! Fuga exercitationem similique qui nam"/>
            <Card icon={<IoMdAnalytics />} title="Dummy Title 3" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad illum, neque atque nobis fuga quasi magnam reprehenderit quae! Fuga exercitationem similique qui nam"/>
        </div>
    )
}

export default CardSection
