import React from 'react'
import Navigation from '../components/Header/Navigation'

const LayoutPrimary = (props) => {
    return (
        <div className='app_layout'>
            <Navigation />
            {props.children}
        </div>
    )
}

export default LayoutPrimary