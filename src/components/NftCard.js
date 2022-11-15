import StarRating from "./StarRating";
import '../styles/NftCard.css'

const NftCard = ({item}) => {
    return (<>
        <div className="nft_card"  >
            <section className='nft_image'
                style={{
                   
                    backgroundImage: `url(${require(`../assests/${item.name}`)})`
                }}
            >

            </section>
            <section className='nft_info_container'>
                <div className='nft_info'>
                    <p>{item.title}</p>
                    <p id='rent_price'> <b>{item.price} per night</b></p>
                </div>
                <div className='nft_info'>
                    <p>{item.distance } away</p>
                    <p>{ item.availability}</p>
                </div>
                <StarRating />

            </section>

        </div>
    </>);
}

export default NftCard;