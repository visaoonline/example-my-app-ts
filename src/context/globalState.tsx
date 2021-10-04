import React, { createContext, useState } from 'react';

interface INumber {
    number: number
}

interface IContext {
    state: INumber;
    setState: React.Dispatch<React.SetStateAction<INumber>>
}

const initialState = {
    state: { 
        number: 0
    },
    setState: () => {}
}

export const GlobalContext = createContext<IContext>(initialState)

export const GlobalProvider = ({ children }: any) => {
    
    const [state, setState] = useState(initialState.state)
    
    return(
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    )
}
