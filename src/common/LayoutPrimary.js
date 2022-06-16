import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Header/Navigation'

const LayoutPrimary = (props) => {
    return (
        <div className='app_layout'>
        {/* navbar */}
            <Navigation />
            {props.children}
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default LayoutPrimary