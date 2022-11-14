import locationIcon from '../assests/location.svg'
import '../styles/places.css'
const LocationNft = () => {
    return (
        <>
            <div className="places_nft_container">
                <div className="different_locations">
                    <p>Restuarant</p>
                    <p>Cottage</p>
                    <p>Castle</p>
                    <p>Fantasy city</p>
                    <p>Beach</p>
                    <p>Carbins</p>
                    <p>Off-grid </p>
                    <p>Farm</p>
                    <button className='places_btn'>Location <img src={ locationIcon} alt="" /></button>
        
                </div>
            </div>
        </>
    );
}
 
export default LocationNft;