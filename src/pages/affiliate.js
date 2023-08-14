import { useEffect } from "react";
import { InlineBanner } from "./lounge";
import { DefaulBtn } from "../components/widgets";
import '../css/pages/affiliate.css'



function Affiliate () {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div className="affiliate_page">
            <InlineBanner />
            <div className="affiliate_page-container" >
                <div>
                    <p >
                    Are you interested in Lifestyle, Sports, Photography, Sustainable Products, or eCommerce? Are you a social media influencer looking to collaborate with brands that add value to your audience? Look no further! The Hydrologist Affiliate Program is here to partner with enthusiastic individuals who share our passion for sustainability and our brand.

By joining our affiliate program, you can benefit from our optimized website, designed to maximize conversions and increase your earnings. We are thrilled to form partnerships with individuals who are genuinely passionate about our brand, as well as influencers who possess a strong engagement with their audience.

Embark on this exciting journey with us and become a part of our affiliate programs and business affiliate opportunities. Join Hydrologist today!
                    </p>
                    <h5 style={{textAlign: 'left', width: '80%', color: '#626262'}}>How does it work?</h5>
                    <ul  style={{textAlign: 'left', width: '80%', color: '#626262', lineHeight: '2rem'}}>
                  <li>  Register as an affiliate on our network completely free of charge.</li>
Submit your      <li>   application to become a part of the Venture Pal Affiliate program.</li>
Incorporate      <li> our creative assets into your website and begin earning commissions right away!</li>
                    </ul>
                <DefaulBtn title="Apply Now" noCap styles={{alignSelf: 'flex-start', marginLeft: '10%', marginTop: '10%'}} secondary/>
                </div>
                <div style={{flex: 1}}>
                    <img style={{height: '100%', width: 'auto'}} src="https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/affiliate.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Affiliate;