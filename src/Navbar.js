import './Navbar.css'


const Navbar = (props) => {
    const list = props.navList;

    return (
        <div className='header'>
            <header>
                <span>
                    Logo
                </span>
                <nav>
                    <ul className='navList'>
                        <li>
                            {list[0]}
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