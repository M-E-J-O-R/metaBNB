import LocationNft from "../components/LocationNft";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const PlaceToStay = () => {
    return (
        <>
            <div className="place_to_stay_wrapper">
                <NavBar />
                <main>
                <LocationNft />
                </main>
                <footer>
                    
                    <Footer/>
                </footer>
               

            </div>
        </>
    );
}

export default PlaceToStay;