import { useEffect, useState } from "react"

export default function () {
    const [slider, setSlider]  = useState(1);
    
    useEffect(() => {
         const interval = setInterval(() => {
             if(slider >= 5 ){ setSlider(1) ;
           
        }
             else {
                setSlider(slider + 1);
               
            }
              
         }, 3500);

         return () => clearInterval(interval);
        
    }, [slider]);
    return (
      
        <div className="home-swiper">
            <div className={`${slider == 1 ? 'slider active': 'slider'}`} style={{backgroundImage: "url('https://tearappy.com/wp-content/uploads/2022/08/Banner_1.png')"}}>
                <div className="slider-content" >
                    <h4>FIND YOUR WATER</h4>
                    <p>Discover & Personalize your drinking experience</p>
                    <button> shope now</button>
                </div>
            </div>
            <div className={`${slider == 2 ? 'slider active': 'slider'}`} style={{backgroundImage: "url('https://tearappy.com/wp-content/uploads/2022/08/Banner_2.png"}}>
                <div className="slider-content">
                    <h4 style={{color: "black"}}>#KISSPLASTICGOODBYE</h4>
                    <p style={{color: "black"}}>The World needs more kisses and less plastic.</p>
                    <button> shope now</button>
                </div>
            </div>
            <div className={`${slider == 3 ? 'slider  active': ' slider'}`} style={{backgroundImage: "url('https://tearappy.com/wp-content/uploads/2022/08/Banner_3.png')"}}>
                <div className="slider-content">
                    <h4 style={{color: "black"}}>A WATER, WHICH REMAINS WATER,BUT STILL SO DIFFERENT</h4>
                    <p style={{color: "black"}}>NEVAS Water combines the water of two natural springs and thus the best mineralization and taste.</p>
                    <button> shope now</button>
                </div>
            </div>
            <div className={`${slider == 4 ? 'slider active': 'slider'}`} style={{backgroundImage: "url('https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2022/08/Banner_4.png')"}}>
                <div className="slider-content">
                    <h4>PURE GOLD DELICACY</h4>
                    <p>no preservatives, no coloring, no flavor enhancement - only 2 most basic and </p>
                    <button> shope now</button>
                </div>
            </div>
            <div className={`${slider == 5 ? 'slider active': 'slider'}`} style={{backgroundImage: "url('https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2022/08/Banner_5.png')"}}>
                <div className="slider-content">
                    <h4>EARTH’S FINEST WATER</h4>
                    <p>Purified by trade winds, and filtered by volcanic rock, it collects in an underground Aquifer, where we bottle it at the source. </p>
                    <button> shope now</button>
                </div>
            </div>
            <div className="indicator">
                <div className={`${slider == 1 ? 'dot on': 'dot'}`} onClick={() => setSlider(1)}></div>
                <div className={`${slider == 2 ? 'dot on': 'dot'}`} onClick={() => setSlider(2)}></div>
                <div className={`${slider == 3 ? 'dot on': 'dot'}`} onClick={() => setSlider(3)}></div>
                <div className={`${slider == 4 ? 'dot on': 'dot'}`} onClick={() => setSlider(4)}></div>
                <div className={`${slider == 5 ? 'dot on': 'dot'}`} onClick={() => setSlider(5)}></div>
            </div>
        </div>
    )
}