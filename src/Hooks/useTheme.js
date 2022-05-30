import { useContext } from "react";
import { ThemePreferenceContext } from "../Context/ThemeProvider";
const useTheme = () => useContext(ThemePreferenceContext); 
export default useTheme;