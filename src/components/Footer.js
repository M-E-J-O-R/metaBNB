import { Link } from 'react-router-dom'
import twitter from '../assests/twitter.png'
import facebook from '../assests/facebook.png'
import instagram from '../assests/instagram.png'
import metabnbFooterIcon from '../assests/metabnb-footer.png'
import '../styles/footer.css'
const Footer = () => {
    return (<>
        <div className='footer_wrapper'>
            <section className="footer_child_one">
                <img className='metabnb_footer_icon' src={metabnbFooterIcon} alt="" />
                <section className='socials'>
                    <img src={facebook}  className='social_icon'  alt="facebook" />
                    <img src={instagram}  className='social_icon' alt="instagram" />
                    <img src={twitter} className='social_icon' alt="twitter" />
                </section>
                <p className='copyright'><span>&copy;</span> 2022 Metabnb </p>

            </section>

            <section className='footer_child_two'>
                <section className='footer__nav'>
                    <p className='footer__nav-head'>Community</p>
                    <Link to='#'>NFT</Link>
                    <Link to='#'>Landlords</Link>
                    <Link to='#'>Token</Link>
                    <a href="#">Discord</a>

                </section>
                <section className='footer__nav'>
                    <p className='footer__nav-head'>Places</p>
                    <Link to='#'>Castels</Link>
                    <Link to='#'>Farms</Link>
                    <Link to='#'>Beach</Link>
                    <a href="#">Learn more</a>

                </section>
                <section className='footer__nav'>
                    <p className='footer__nav-head'>About us</p>

                    <Link to='#'>Road map</Link>
                    <Link to='#'>Creators</Link>
                    <Link to='#'>Career</Link>
                    <a href="#">Contact us</a>

                </section>
            </section>
        </div>
    </>);
}

export default Footer;