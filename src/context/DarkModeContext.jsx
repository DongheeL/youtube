import React, { createContext, useContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode=()=>{
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    } 

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function updateDarkMode(mode){
    if(mode){
        document.documentElement.classList.add('dark')
    }else {
        document.documentElement.classList.remove('dark')
    }
}

export function useDarkMode() {
    return useContext(DarkModeContext);
}
