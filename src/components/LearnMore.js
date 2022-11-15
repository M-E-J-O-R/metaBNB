import learn_more_img from '../assests/learn_more_image.png'
import '../styles/learn_more.css'
const LearnMore = () => {
    return (<>
        <div className="learn_more_wrapper">
            <section className="learn_more_child_one">
                <p className="learn_more_head">Metabnb NFTs</p>
                <p className="learn_more_info">
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button id="learn_more_btn">
                    Learn more
                </button>

            </section>

            <section className="learn_more_child_two">
                <img className='learn_more_img' src={learn_more_img} alt="" />

            </section>
        </div>
    </>);
}

export default LearnMore;