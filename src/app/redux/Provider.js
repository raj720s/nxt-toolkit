"use client"

const { store } = require("./store")

import { Provider } from 'react-redux'

export function ReduxProvider({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>
} 