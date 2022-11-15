import { useState } from 'react';
import { Link } from 'react-router-dom';
import metabnbIcon from '../assests/metabnb-header.png'
import '../styles/NavBar.css'
import ConnectWallet from './ConnectWallet';
import iconHamburger from '../assests/icon-hamburger.svg'
import close from '../assests/close.svg'
const NavBar = () => {
    const [walletModal, setWalletModal] = useState(false)
    const [mobileDisplayer, setMobileDisplayer]= useState(false)

    return (<>
        <div className='nav-bar-wrapper'>
            <img src={metabnbIcon} alt="" />
            <img src={iconHamburger} className='mobile_displayer mobile_displayer-hide' onClick={()=>setMobileDisplayer(prev=>!prev)} alt=''/>
        

            <div className='mobile_nav'>
                <img src={ close} className='mobile_displayer-hide closing_icon'  alt='' onClick={()=>setMobileDisplayer(false)}/>
                <nav className='nav-link-container'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/place_to_stay'}>Place to stay</Link>
                    <Link>NFTs</Link>
                    <Link>Community</Link>
                </nav>


                <button id='connect_wallet_btn' onClick={() => setWalletModal(prev => !prev)}>Connect wallet</button>

            </div>



            <div className={`${walletModal ? 'wallet_modal' : 'hidden'}`}>
                <ConnectWallet setWalletModal={setWalletModal} />
            </div>
        </div>
    </>);
}

export default NavBar;