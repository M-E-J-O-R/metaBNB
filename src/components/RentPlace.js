import placeOne from '../assests/rent-place-one.png'
import placeTwo from '../assests/rent-place-two.png'
import placeThree from '../assests/rent-place-three.png'
import placeFour from '../assests/rent-place-four.png'
import styles from '../styles/RentPlace.module.css'
import mbTokenIcon from '../assests/mbtoken.svg'
import metamaskIcon from '../assests/grey-metamask.svg'
import openseaIcon from '../assests/opensea.svg'
const RentPlace = () => {
    return (
        <>
            <div className={`${styles.rent_place_wrapper}`}>
                <section className={`${styles.child_one}`}>

                    <p className={`${styles.child_one_header}`}>
                        Rent a <span className={`${styles.purple}`} >Place</span>  away from <span className={`${styles.purple}`}>Home</span> in the <span className={`${styles.purple}`}>Metaverse</span>
                    </p>
                    
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                    <section className={`${styles.search_box_container}`}>
                        <input className={`${styles.search_box}`} type="text" placeholder="Search for location" />
                        <button className={`${styles.search_btn}`}>Search</button>
                    </section>


                </section>

                <section className={`${styles.child_two}`}>
                    <div className={`${styles.location_card} ${styles.card_one}`} >
                        <img src={placeOne} alt="" />
                        <img src={placeTwo} alt="" />
                    </div>

                    <div className={`${styles.location_card} `}>
                        <img src={placeThree} alt="" />
                        <img src={placeFour} alt="" />
                    </div>
                </section>



            </div>
            <div className={`${styles.banner}`}>
                <img src={mbTokenIcon} alt="" />
                <img src={metamaskIcon} alt="" />
                <img src={openseaIcon} alt="" />
            </div>


        </>
    );
}

export default RentPlace;