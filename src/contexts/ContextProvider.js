import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setscreenSize] = useState(undefined)
    const [currentColor, setcurrentColor] = useState('#03C9D7')
    const [currentMode, setcurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setcurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        setcurrentColor(color);
        localStorage.setItem('ColorMode', color)
        setThemeSettings(false)
    }


    const handleClick = (Clicked) => {
        setisClicked({ ...initialState, [Clicked]: true })
    }

    return (
        <stateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setisClicked,
                handleClick,
                screenSize,
                setscreenSize,
                currentColor,
                currentMode,
                themeSettings,
                setThemeSettings,
                setColor,
                setMode
            }}
        >
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)