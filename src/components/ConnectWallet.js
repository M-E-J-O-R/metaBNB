import '../styles/connect_wallet.css'
import metamaskIcon from '../assests/metamask_icon.png'
import walletconnectIcon from '../assests/wallet-connect-icon.png'
import closeIcon from '../assests/close.svg'
import arrowRight from '../assests/arrow-right.svg'
import { useState } from 'react'


const ConnectWallet = ({setWalletModal}) => {
    const [close, setClose] = useState(false)
    const handleClose = () => {
        setClose((prev)=>!prev)
    }
    // style={{
    //     display: close?'none':'block'
    // }} 
    return (<>
        <div className="wallet_wrapper">
            <section className='wallet_header'>
                <p className='wallet_head'>Connect Wallet </p>
                <img  src={closeIcon} onClick={()=>setWalletModal(prev=> !prev)} alt="" />

            </section>


            <section className='wallet_body'>
                <p id='wallet_body_head'>Choose your preferred wallet</p>

                <WalletType walletIcon={metamaskIcon} walletName='Metamask' />

                <WalletType walletIcon={walletconnectIcon} walletName='WalletConnect' />
            </section>

        </div>
    </>);
}
function WalletType  ({ walletIcon, walletName }){
    return (
        <section className='wallet_card'>
            <span id='wallet_card_head'>
                <img src={walletIcon} alt={walletName} />
                <p>{walletName}</p>
            </span>

            <img src={arrowRight} alt="" />

        </section>

    )
}

export default ConnectWallet;