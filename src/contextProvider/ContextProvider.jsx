import React, { createContext, useReducer } from 'react';
//MY IMPORT EXPORT
import { reducer } from "./reducer"
import { initialVal } from "./initialval"
export const AppContext = createContext()


const ContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , initialVal)


    return (
        <AppContext.Provider value={{state , dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;