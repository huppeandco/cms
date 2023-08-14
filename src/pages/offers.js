import { useEffect } from "react";
import { InlineHeader, OfferComponent } from "../components/widgets";

const imageOne = 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/W1.jpg';
const imageTwo = 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/W2.jpg'
const offers = [
    {limited: true, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageOne, type: 'get', dark: false},
    {limited: false, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageTwo, type: 'get', dark: true},
    {limited: true, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageOne, type: 'get', dark: false},
    {limited: false, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageTwo, type: 'get', dark: true},
    {limited: true, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageOne, type: 'get', dark: false},
    {limited: false, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageTwo, type: 'get', dark: true},
    
]
function Offers () {
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    return (
        <div className="offers-container" >
            <InlineHeader title="Offers" />
            <div  >
              {offers.map ((offer) => {
                return (
                    <OfferComponent title={offer.title} 
                                    desc={offer.desc} 
                                    footer={offer.footer}
                                    image={offer.image}
                                    type={offer.type}
                                    priece={offer.priece}
                                    limited={offer.limited}
                                    dark={offer.dark}/>
                )
            })}

            </div>
            
        </div>
    )
}


export default Offers;