import React, {createContext, useEffect, useState} from "react";
export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDark, setBgColor] = useState(JSON.parse(localStorage.getItem("backgroundColor"))) || false


const changeBgColor = () => {
    setBgColor((prev) => {
        localStorage.setItem("backgroundColor", JSON.stringify(!prev))
        return !prev
    })
}

useEffect(() => {
    document.body.style.backgroundColor = isDark ? "black" : "white"
    document.body.style.color = isDark ? "white" : "black"
}, [isDark])

const value = {
    isDark,
    changeBgColor
}

return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
)
}
export default ThemeProvider