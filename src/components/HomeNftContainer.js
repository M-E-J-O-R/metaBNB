import data from '../data/ImagesPath'
import '../styles/HomeNftContainer.css'
import NftCard from './NftCard';

let HomeNfts = data.Home
const HomeNftContainer = () => {



    return (
        <>
            <div className='inspiration_container'>


                <p className='inspiration'>
                    <b> Inspiration for your next adventure</b>
                </p>
                <div className='home_nft_container'>
                    {HomeNfts.map((item, key) => {
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

export default HomeNftContainer
    ;