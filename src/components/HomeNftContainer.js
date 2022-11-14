import '../styles/NftCard.scss'
import StarRating from './StarRating';
import imagePath from '../data/ImagesPath.json'
import '../styles/HomeNftContainer.scss'
let HomeImages = imagePath.Home
const HomeNftContainer = () => {
    console.log(HomeImages)


    return (
        <>
            <div className='inspiration_container'>


                <p p className='inspiration'>
                    <b> Inspiration for your next adventure</b>
                </p>
                <div className='home_nft_container'>


                    {HomeImages.map((imgData, key) => {
                        return (
                            <div className="nft_card" key={key}>
                                <section className='nft_image'
                                    style={{
                                        backgroundImage: `url(${require(`../assests/${imgData.name}`)})`
                                    }}
                                >

                                </section>
                                <section className='nft_info_container'>
                                    <div className='nft_info'>
                                        <p>Desert king</p>
                                        <p id='rent_price'> <b>IMBT per night</b></p>
                                    </div>
                                    <div className='nft_info'>
                                        <p>2345km away</p>
                                        <p>available for 2 weeks stay</p>
                                    </div>
                                    <StarRating />

                                </section>

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