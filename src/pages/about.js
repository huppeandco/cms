import { Parallax } from 'react-parallax';
import { InlineHeader } from '../components/widgets'
import { useEffect } from 'react';
import '../css/pages/about.css'

function About () {
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    return (
        <div className='about'>
            <InlineHeader title='Who We Are' />
            <Parallax
                bgImageSizes='cover'
                bgImage={require('../assets/backgrounds/1-about-us-.jpg')}
                bgImageAlt="the dog"
                strength={-200}
                
             
            >
                <div className='darken-bg'></div>
                <div style={{height: '70vh', width: '100%'}} />

                
            </Parallax>
            <Parallax
               
                bgImage={require('../assets/backgrounds/2-about-us.jpg')}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='about-section'>
                <div className='darken-bg'></div>
                    <h2>About Us</h2>
                    <p>About Us
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </div>
            </Parallax>
            <Parallax
               
                bgImage={require('../assets/backgrounds/3-about-us.jpg')}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='about-section'>
                <div className='darken-bg'></div>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
            </Parallax>
            <Parallax
              
                bgImage={require('../assets/backgrounds/4-about-us.jpg')}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='about-section'>
                <div className='darken-bg'></div>
                <h2>Our Team</h2>
                <div className='about-team'>
                    <div>
                        <img  src='https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/image-box-10-1.jpg'/>
                        <h4>Summer Collection</h4>
                        <p>Officia ut cupidatat ullamco qui nisi nostrud commodo in laborum. Exercitation quis magna nostrud et cillum exercitation qui ipsum quis ullamco esse. Labore quis excepteur anim qui do mollit esse laborum anim consectetur officia consequat minim labore. Laborum ullamco amet nisi ea non.

 nostrud cillum consequat amet amet. Mollit laboris excepteur ad labore Lorem sit.</p>
                    </div>
                    <div>
                        <img  src='https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/image-box-10-1.jpg'/>
                        <h4>Summer Collection</h4>
                        <p>Officia ut cupidatat ullamco qui nisi nostrud commodo in laborum. Exercitation quis magna nostrud et cillum exercitation qui ipsum quis ullamco esse. Labore quis excepteur anim qui do mollit esse laborum anim consectetur officia consequat minim labore. Laborum ullamco amet nisi ea non.

dipisicing nisi uat amet amet. Mollit laboris excepteur ad labore Lorem sit.</p>
                    </div>
                    <div>
                        <img  src='https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/image-box-10-1.jpg'/>
                        <h4>Summer Collection</h4>
                        <p>Officia ut cupidatat ullamco qui nisi nostrud commodo in laborum. Exercitation quis magna nostrud et cillum exercitation qui ipsum quis ullamco esse. Labore quis excepteur anim qui do mollit esse laborum anim consectetur officia consequat minim labore. Laborum ullamco amet nisi ea non.

Eu upidatat sit trud cillum consequat amet amet. Mollit laboris excepteur ad labore Lorem sit.</p>
                    </div>
                    
                </div>

                </div>
            </Parallax>
        </div>
    )
}
export default About;