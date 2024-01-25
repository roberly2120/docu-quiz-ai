import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const initialState = {
        aiResponse: '',
        documentText: '',
    }
    const [globalState, setGlobalState] = useState(initialState);

    return (
        <AppContext.Provider value={{ globalState, setGlobalState}}>
            {children}
        </AppContext.Provider>
    );
};