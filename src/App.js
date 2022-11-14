import ConnectWallet from "./components/ConnectWallet";
import Footer from "./components/Footer";
import LearnMore from "./components/LearnMore";
import NavBar from "./components/NavBar";
import NftCard from "./components/HomeNftContainer";
import RentPlace from "./components/RentPlace";
import './styles/app.css'
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PlaceToStay from "./pages/PlaceToStay";




function App() {


  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/place_to_stay' element={ <PlaceToStay/>} />
      </Routes>
      <div className="App">


        {/* <NavBar /> */}
        {/* <RentPlace/> */}
        {/* <NftCard /> */}

        {/* <LearnMore />
        <Footer /> */}
      </div>
    </>


  );
}

export default App;
