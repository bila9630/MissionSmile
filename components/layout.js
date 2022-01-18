import React from 'react'
import ResponsiveAppBar from './appbar'
import AuthRoute from './authRoute'


const Layout = ({ children }) => {
    return (
        <div>
            <AuthRoute>
                <ResponsiveAppBar />
                {children}
            </AuthRoute>
        </div>
    )
}

export default Layout
