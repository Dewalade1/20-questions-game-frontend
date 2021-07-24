import React from 'react'

import HtmlHead from '../../components/layouts/htmlHead'

const Layout = ({children}) => {
    return( 
        <>
            <HtmlHead />
            <main>{children}</main>
        </>
    )
}

export default Layout