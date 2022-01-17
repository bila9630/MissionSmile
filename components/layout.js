import React from 'react'
import ResponsiveAppBar from './appbar'


const Layout = ({ children }) => {
    return (
        <div>
            <ResponsiveAppBar />
            {children}
        </div>
    )
}

export default Layout
