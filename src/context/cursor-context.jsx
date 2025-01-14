import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [cursorData, setCursorData] = useState(null);
    const [cursorText, setCursorText] = useState("");
    const [colorData, setColorData] = useState("");


    const setCursor = (variant, color, data = null) => {
        setCursorVariant(variant);
        setColorData(color);
        setCursorData(data);
    };

    return (
        <CursorContext.Provider value={{ cursorVariant, setCursorVariant, cursorData, setCursor, cursorText, setCursorText, colorData, setColorData }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);