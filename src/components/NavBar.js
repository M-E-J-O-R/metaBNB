import { Link } from 'react-router-dom';
import metabnbIcon from '../assests/metabnb-header.png'
import '../styles/NavBar.css'
const NavBar = () => {
    return (<>
        <div className='nav-bar-wrapper'>
            <img src={metabnbIcon} alt="" />
     
                <nav className='nav-link-container'>
                    <Link>Home</Link>

                    <Link>Place to stay</Link>                 
                    <Link>NFTs</Link>
                    <Link>Community</Link>
                </nav>

           
            <button id='connect_wallet_btn'>Connect wallet</button>
        </div>
    </>);
}
 
export default NavBar;