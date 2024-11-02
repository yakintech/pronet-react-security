import React from 'react'
import { useSelector } from 'react-redux'

function RoleWrapper({ children, roleNumber }: any) {

    const auth = useSelector((state: any) => state.auth)

    const roles = auth.user.roles

    if (roles.includes(roleNumber)) {
        return (
            <div>{children}</div>
        )
    } else {
        return <></>
    }
}

export default RoleWrapper