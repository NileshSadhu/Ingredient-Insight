import { View, Text } from 'react-native'
import React, { Children, createContext } from 'react'

export const authContext = createContext();

export const AuthProvider = ({children}) => {
    return (
        <AuthProvider>
            {Children}
        </AuthProvider>
    )
}