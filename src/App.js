import './App.css';
import Header from './Header';
import FloatSocial from './components/floatSocial';
import Home from './Home'
import Footer from './components/footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Shope from './pages/shope';
import Insights from './pages/insights';
import Offers from './pages/offers';
import SearchModal from './components/searchModal';
import { useEffect, useState } from 'react';
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
import Reactbanner from './components/reactbanner';
import MobileNav from './components/mobilenav';
import Cart from './pages/cart';
import NavIndicator from './components/navindicator';
import Insight from './pages/insight';
import FindMyWater from './pages/findmywater';
import Router from './Router';
import { useContext } from 'react';
import { DataContext } from './data';
import { Langs } from './components/widgets';

function App() {
  const [searchVisible, setSearchVisible ] = useState(false);
  const [mbNavVisible, setMbNavVisible ] = useState(false);
  const [secret, setSecete ] = useState('')
  const pageContext = useContext(DataContext);
  let password = pageContext.password;
  let passcode = pageContext.passCode;
  let setPassCode = pageContext.setPassCode;

  const data = [
    {img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-4.webp', date: 'August 16, 2022', title: 'THE HYDROLOGIST UNIQUE PRODUCTS', url: '/insight/:1'},
    {img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-3.webp', date: 'August 16, 2022', title: 'CANADA WATER BRAND LAUNCHING IN UAE', url: '/insight/:2'},
    {img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-2.webp', date: 'August 16, 2022', title: 'SALACIOUS DRINKS – ONLINE BOTTLED WATER BOUTIQUE', url: '/insight/:3'},
    {img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog1.webp', date: 'Octobar 1, 2021', title: 'BEGINNING OF THE LUXURY WATER WAVE', url: '/insight/:4'},

  ]
  const location = useLocation();
  const handleSearchVisible = () => {
    setSearchVisible(!searchVisible);
  }
  const toggleMbNav  = () => {
    setMbNavVisible(!mbNavVisible);
  }

  const handleScerte = (e) => {
    setSecete(e.target.value)
  }
  const handlelclick = () => {
    console.log('fired');
    setPassCode(secret);
  }
  useEffect(() => {

  const listner = window.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handlelclick();
    }
    })
    return window.removeEventListener('keypress', listner);
  }, [secret])
  return (
    <div className="App" >
      <Reactbanner />
      {searchVisible && <SearchModal toggleSearch={handleSearchVisible} />}
      <Header toggleSearch={handleSearchVisible} toggleMbNav={toggleMbNav}  />
      <NavIndicator />
      {mbNavVisible && <MobileNav toggleMbNav={toggleMbNav} />}
      {passcode == password ?

      <Router data={data} location={location} /> 
      : 
        <div style={{marginTop: '6rem'}}>
          <h1 style={{color: 'red'}}><span style={{textDecoration: 'underline'}}>Access Denied</span> <br />enter password to access the site</h1>
          <input  style={{padding: '1rem', outline: 'none', border: 'none', backgroundColor: '#e1e1e1'}}   type='text'onChange={handleScerte} value={secret} />
          <button  style={{padding: '1rem', outline: 'none', border: 'none', cursor: 'pointer'}} onClick={handlelclick }>ENTER</button>
        </div>
        }
      <FloatSocial />
      
      
      <Langs />
      <Footer />
    </div>
  );
}

export default App;
