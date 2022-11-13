import StarRating from "./StarRating";

const HomeNftContainer = () => {
    return (<>
        <div className="nft_card" >
            <section className='nft_image'
                style={{
                    backgroundImage: `url(${require(`../assests/${'image_name'}`)})`
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
    </>);
}

export default HomeNftContainer;