import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLarger] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLarger(window.innerWidth);

            if(window.innerWidth > 500){
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);
        
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
                <ul className="liste">
                    <Link to="/" className='home'>Home</Link>
                    <Link to="/bitcoin" className='items'>Bitcoin</Link>
                    <Link to="/ethereum" className='items'>Ethereum</Link>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className='btn'>Menu</button>
        </nav>
    )
}