import { useState } from 'react';
import { Link } from 'react-router-dom';
import metabnbIcon from '../assests/metabnb-header.png'
import '../styles/NavBar.css'
import ConnectWallet from './ConnectWallet';
const NavBar = () => {
    const [walletModal,setWalletModal] = useState(false)
    
    return (<>
        <div className='nav-bar-wrapper'>
            <img src={metabnbIcon} alt="" />
     
                <nav className='nav-link-container'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/place_to_stay'}>Place to stay</Link>                 
                    <Link>NFTs</Link>
                    <Link>Community</Link>
                </nav>

           
            <button id='connect_wallet_btn' onClick={()=>setWalletModal(prev=>!prev)}>Connect wallet</button>
           
             <div className={`${walletModal?'wallet_modal':'hidden'}`}>
                <ConnectWallet setWalletModal={ setWalletModal} />
            </div>  
        </div>
    </>);
}
 
export default NavBar;