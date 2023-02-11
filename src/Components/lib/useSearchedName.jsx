import { useEffect, useState } from "react";

const usePersistedState = (initialState, sessionStorageKey) =>{
    const [state, setState] = useState(()=>{
        const presistedValue = sessionStorage.getItem(sessionStorageKey);
        return presistedValue ? JSON.parse(presistedValue) : initialState;
    })
    useEffect(() => {
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(state))
    }, [state, sessionStorageKey])
    return [state, setState]
}





export const useSerchedName = () => {
    return usePersistedState( '', 'searchString');
}