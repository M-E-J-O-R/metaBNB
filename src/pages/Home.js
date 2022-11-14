import HomeNftContainer from '../components/HomeNftContainer';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import RentPlace from '../components/RentPlace'
import LearnMore from '../components/LearnMore';
import ConnectWallet from '../components/ConnectWallet';
const Home = () => {
    return (
        <>
            <div className='Home'>
                <header>
                    <NavBar />
                </header>
                {/* <main>
                    <RentPlace />
                    <HomeNftContainer />
                    <LearnMore/>
                </main>
                <footer>
                    <Footer/>
                </footer> */}

            </div>

        </>
    );
}

export default Home;