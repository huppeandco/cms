import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../data";
import { useEffect } from "react";
import '../css/pages/insight.css'
import { Facebook, Linkedin, Twitter } from "../components/floatSocial";

function Insight () {
    const { id } = useParams();
    const numericId = id.substring(1);
    const idAsInteger = parseInt(numericId, 10);
    const insights = useContext(DataContext).insights;
    const pageData = insights[idAsInteger - 1]

    let setNavigator = useContext(DataContext).setNavIndictorState;
    setNavigator(pageData?.header)
    console.log(pageData)
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return(
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div className="insight-container">
            <h1>{pageData?.header}</h1>
            <div className="insight_date-authter"> 
                <img src="https://secure.gravatar.com/avatar/d8d50549f6bd6645d9d301b20663472c?s=32&d=mm&r=g" /> 
                <p>By{pageData.aurther}</p> <span>|</span>
                <time>{pageData.date}</time>  <span>|</span>
                <p> 0 comments</p>
            </div>
            <img style={{alignSelf: 'flex-start'}} src={pageData?.img} />
            <p>{pageData?.ftxt}</p>
            <p className="insight-quota">
                {pageData?.quote}
            </p>
            <p>{pageData.stxt}</p>
            <p className="insight_second-title">{pageData?.stitle}</p>
            <p>{pageData?.ttxt}</p>
            <img src="https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/single-blog-1-600x420.jpg" />
            <p style={{marginBottom: '2rem', marginTop: 0,textAlign: 'center' }}>Producing the highest quality products</p>
            <p>{pageData?.ltxt}</p>
            <div className="insight-share">
                <p>share:</p>
                <Facebook />
                <Twitter />
                <Linkedin />
            </div>
            <div className="insight_prev-next">
                <div>
                    <Link to={insights[idAsInteger - 2 ]?.url}>
                    <p>PERVIOUS</p>
                    <p>{insights[idAsInteger - 2 ]?.header}</p>
                    </Link>
                </div>
                <div>
                    <Link to={insights[idAsInteger]?.url}>
                    <p>NEXT</p>
                    <p>{insights[idAsInteger]?.header   }</p>
                    </Link>
                </div>
            </div>
            <div className="insight_related-posts">
                <h4>Related Posts</h4>
                <div>

                {
                    insights.map((i,index) => {
                        return(
                            <div key={index}>
                                <img src={i.img} />
                                <p>{i.header}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="insight_leave-replay">
                <h4> Leave a Replay</h4>
            </div>
            </div>
        </div>
    )
}

export default Insight;