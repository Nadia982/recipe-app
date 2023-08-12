import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//context will be undefined if we try to use context outside of its scope.
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }
    return context;
} 