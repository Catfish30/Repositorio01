import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Route } from 'react-router-dom'


export default function ProtectedRoute({ component: Component, ...rest}) {
    return (
        <div>
            <Route {...rest} render={(props) => <Component {...rest} {...props} /> } />
        </div>
    )
}
