import { Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home'
import Shope from './pages/shope';
import Insights from './pages/insights';
import Offers from './pages/offers';
import About from './pages/about';
import Water from './pages/water';
import Lounge from './pages/lounge';
import Brands from './pages/brands';
import Affiliate from './pages/affiliate';
import Contact from './pages/contact';
import Recycling from './pages/recycling';
import Program from './pages/program';
import SiteMap from './pages/siteMap';
import FAQS from './pages/faqs';
import Carear from './pages/carear';
import Login from './pages/login';
import Products from './pages/prodcuts';
import Product from './pages/product';
import Cart from './pages/cart';
import Insight from './pages/insight';
import FindMyWater from './pages/findmywater';
import Uploadproduct from './pages/uploadproduct';
import { useEffect, useState } from 'react';
import FlashScreen from './components/flashscreen';
import UpdateOffer from './pages/updateoffer';
import Dashboard from './dashboard';
import CsvFileReader from './components/cvsReader';


function Router ({data, location}) {
    const [showFlashScreen, setShowFlashScreen] = useState(true);

    useEffect(() => {
        // Simulate the flash screen for a certain duration (e.g., 2 seconds)
       
        setShowFlashScreen(true);
        const timeout = setTimeout(() => {
          setShowFlashScreen(false);
        }, 1000);
    
        return () => clearTimeout(timeout);
      }, [location]);
    return (
        <>
         {showFlashScreen && <FlashScreen />}
        <TransitionGroup component={null}>
        <CSSTransition timeout={250} classNames="fade">
        <Routes>
           
            <Route  path="/" element={<Dashboard data={data}  />} />
            <Route  path="/:fab" element={<Dashboard data={data}  />} />
            <Route  path="/pages/home" element={<Home data={data}  />} />
            <Route path="/pages/shope" element={<Shope  />} />
            <Route path="/pages/insights" element={<Insights data={data} />} />
            <Route path="/pages/offers" element={<Offers /> } />
            <Route path="/pages/about" element={<About />} />
            <Route path="/pages/water" element={<Water />} />
            <Route path="/pages/lounge" element={<Lounge />} />
            <Route path="/pages/brands" element={<Brands />} />
            <Route path="/pages/affiliate" element={<Affiliate />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/pages/recycling" element={<Recycling />} />
            <Route path="/pages/program" element={<Program />} />
            <Route path="/pages/sitemap" element={<SiteMap />} />
            <Route path="/pages/faqs" element={<FAQS />} />
            <Route path="/pages/carear" element={<Carear />} />
            <Route path="/pages/login" element={<Login />} />
            <Route path="/pages/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cvs" element={<CsvFileReader />} />
            <Route path="/pages/cart" element={<Cart />} />
            <Route path='/pages/insight/:id' element={<Insight />} />
            <Route path='/pages/fmy' element={<FindMyWater />} />
            <Route path='/pages/uploadProduct' element={<Uploadproduct />} />
            <Route path='/pages/updateoffer' element={<UpdateOffer />} />
        </Routes>
        </CSSTransition>
      </TransitionGroup>
      </>
    
    )
}


export default Router;