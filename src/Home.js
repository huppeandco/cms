import { useEffect } from 'react';
import Swiper from './components/Swiper';
import Marquee from './components/marquee';
import OfferView from './components/offerview';
import Shelf from './components/shelf';
import HydroStore from './components/store';
import './css/pages/home.css'
import { FywWidget, InsightsComponent, NumberView, Testimonial } from './components/widgets';
import Scene from './components/bottlemode';



export default function ({data}) {
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    return (
        <div className="home">
            <Swiper />
            <Marquee />
            <Shelf />
            {/* <Scene /> */}
            <HydroStore />
            <OfferView />
            <FywWidget />
            <NumberView />
            <Testimonial />
            <InsightsComponent data={data} title="Insights"/>
        </div>
    )
}