import { useContext } from "react";
import { Change } from "./Change";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import './css/Click.css';

function Click() {
    const proto = useContext(Change);
    const { theme, toggleTheme } = proto;
    return (
        <button
            className='theme'
            onClick={toggleTheme}
        >
            {theme === 'light' ? <MdDarkMode size={25} color='black' /> : <MdDarkMode size={25} color='white' />}
        </button>
    );
}

export default Click;