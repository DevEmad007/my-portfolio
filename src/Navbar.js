import './Navbar.css'


const Navbar = () => {
    return (
        <div className='header'>
            <header>
                <span>
                    Logo
                </span>
                <nav>
                    <ul className='navList'>
                        <li>
                            Home
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            Info
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='corrector'>

            </div>
        </div>
    );
}

export default Navbar;