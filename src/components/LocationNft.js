import locationIcon from '../assests/location.svg'
import '../styles/places.css'
import data from '../data/ImagesPath.json'
import NftCard from './NftCard'


let placesToStayNfts = data.placesToStay
const LocationNft = () => {
   
    return (
        <>
            <div className="places_container">


                <div className='location_wrapper'>


                    <section className="locations">
                        <p>Restuarant</p>
                        <p>Cottage</p>
                        <p>Castle</p>
                        <p>Fantasy city</p>
                        <p>Beach</p>
                        <p>Carbins</p>
                        <p>Off-grid </p>
                        <p>Farm</p>

                    </section>

                    <button className='places_btn'>Location <img src={locationIcon} alt="" /></button>

                </div>

                <div className='places_nft_container'>
                    {placesToStayNfts.map((item, key) => {
                        return (
                            <div key={key}>
                                <NftCard item={item} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    );
}

export default LocationNft;