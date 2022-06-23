import { createContext, useReducer } from "react";
import omdbReducer from "./OmdbReducer";

const OmdbContext = createContext()

export const OmdbProvider = ( {children} ) => {
    
    const initialState = {
        movies: [],
        loading: false
    }

    const [state, dispatch] = useReducer(omdbReducer, initialState)

    return <OmdbContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </OmdbContext.Provider>

}

export default OmdbContext