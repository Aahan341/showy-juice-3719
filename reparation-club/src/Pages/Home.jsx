import Bottomnav from "../Components/Home/Bottomnav";
import Crouser from "../Components/Home/Crouser";
import Footer from "../Components/Home/Footer";
import {Advertise1} from '../Components/Data/home.js'
import {Advertise2} from '../Components/Data/home.js'
import {Advertise3} from '../Components/Data/home.js'
import {product1} from '../Components/Data/home.js'
import {product2} from '../Components/Data/home.js'
import {product3} from '../Components/Data/home.js'
import Advertise from "../Components/Home/Advertise";
import Product from "../Components/Home/Product";
import Titled from "../Components/Home/Heading";

function HomeLogo(){

    return(
        <>
            <Bottomnav/> 
            <Crouser/>
            <Titled Title={'Mega Price Drop'}/>
            <Product data={product1}/>
            <Advertise data={Advertise1}/>
            <Titled Title={'Flash Sale'}/>
            <Product data={product2}/>
            <Advertise data={Advertise2}/>
            <Titled Title={'Trending Now'}/>
            <Product data={product3}/>
            <Advertise data={Advertise3}/>
            
            <Footer/>
        </>
    )
}

export default HomeLogo;