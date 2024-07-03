import React, { FC, PropsWithChildren } from 'react'

const Layout:FC<PropsWithChildren<unknown>> = ({children}) => {
	return (
		<div>{children}</div>
	)
}

export default Layout