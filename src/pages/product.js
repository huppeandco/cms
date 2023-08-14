import { useContext, useEffect } from 'react';
import '../css/pages/prodcut.css';
import { CurrencySelector, DefaulBtn, StarRating, InputPlus, SkeletonTxtLoader } from '../components/widgets';
import { Facebook, Linkedin, Twitter } from '../components/floatSocial';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import { ProductItem, sotreProducts } from '../components/store';
import { DataContext } from '../data';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';


function randomSlice(array) {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error("Input must be a non-empty array.");
    }
  
    const startIndex = Math.floor(Math.random() * array.length);
    const endIndex = Math.floor(Math.random() * array.length);
  
    const start = Math.min(startIndex, endIndex);
    const end = Math.max(startIndex, endIndex);
  
    return array.slice(start, end + 1);
}
function Product () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const img = urlParams.get('img');
    const priece = urlParams.get('priece');
    const quantity = urlParams.get('quantity');
    const id = urlParams?.get('id');

    const [activeTap, setActiveTap ] = useState(1);
    const [productData, setProductData ] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    let data = useContext(DataContext);
    let cart = data.cart
    let updateCart = data.updateCart;
    const [items, setItems] = useState([]);
    useEffect(() => {
    setItems(cart);

   }, [cart]);
  
    useEffect(() => {
    window.scrollTo(0,0);
    setRelatedProducts(randomSlice(sotreProducts));

    
   }, []);

   useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`https://thehydrologist.com/get-one-product.php?id=${id}`);
        const allProducts = response.data;
        return allProducts;
      } catch (error) {
        throw error;
      }
    }
  
  
      fetchProducts()
      .then((products) => {
         // Log the JavaScript object
        
        setProductData(products);
        console.log(data) // Update state with the fetched products
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
   
  }, []);
    return(
        <div className='product'>
            <div className='product-item'>
                <div className="prodcut-img-view">
                    <Fade right duration={1500}>
                    <img src={img}/>
                    </Fade>
                </div>
                <div className='product-txt-view'>
                    {productData ? (<><h1>{name || productData?.name}</h1>
                    <p>Aliqua proident est irure mollit consequat consectetur labore do nisi quis velit ullamco exercitation. Ea est commodo magna deserunt non exercitation ea. Ipsum amet cupidatat elit esse magna ullamco tempor. Ad incididunt exercitation id sit aliqua veniam Lorem est excepteur amet eiusmod ipsum.

                    incididunt pariatur. Sunt nostrud magna voluptate nulla exercitation.</p></>) : (
                        <SkeletonTxtLoader />
                    )}
                    <CurrencySelector />
                    <h4>{priece || productData?.priece || productData?.price}</h4>
                    <p>quantity</p>
                    <div className='product_btn-container'>
                    <InputPlus
                        count={quantity}
                        IncressCount={ (e) => {
                            
                            const itemIndex = items.findIndex((item) => item.productName === name);
                            if (itemIndex !== -1) {
                            const updatedCart = [...items];
                            updatedCart[itemIndex].quantity = updatedCart[itemIndex].quantity + 1;
                            updateCart(updatedCart);
                            }
                        }}
                        DisgressCount={(e) => {
                            const itemIndex = items.findIndex((item) => item.productName === name);
                            if (itemIndex !== -1) {
                            const updatedCart = [...items];
                            updatedCart[itemIndex].quantity = updatedCart[itemIndex].quantity - 1;
                            updateCart(updatedCart);
                            }
                        }}
                        />
                        <DefaulBtn title="Add to Cart" secondary noCap styles={{flex: 1, height: '100%', lineHeight: '1.7rem'}} />
                    </div>
                 
                    <div className='product-footer'>
                        <div>
                            <p>SKU</p>
                            <p>Categorey</p>
                            <p>Share</p>
                        </div>
                        <div>
                            <p>N/A</p>
                            <p>Uncategorized</p>
                            <div>
                                <Facebook />
                                <Twitter />
                                <Linkedin />
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>
            
            <div className='product-additional'>
                <div className='additinal-taps p-bg-sc'>
                    <h2 className={`${activeTap == 1  ? 'active' :  ''}`} onClick={ () => {setActiveTap(1)}}>ADDITIONAL INFORMATION</h2>
                    <h2  className={`${activeTap == 2  ? 'active' :  ''}`} onClick={ () => {setActiveTap(2)}}> Review (0)</h2>
                </div>
                {
                    activeTap == 1 ? (
                    <>
                        <div className='addtional-info'>
                            <h2  className='p-sm-sc'>Additional Information </h2>
                            <div>
                                <h4>Volume</h4>
                                <h4>1L, 300ml, 500ml</h4>
                            </div>
                            <div>
                                <h4> brand name</h4>
                                <h4>{name}</h4>
                            </div>
                            <div>
                                <h4>Packaging</h4>
                                <h4>Glass, Pet, Can, Box</h4>

                            </div>
                        </div>
                        <div className='product-review p-sm-sc'>
                            <h2  className='p-sm-sc'> Reviews </h2>
                            <h4>Reviews</h4>
                            <p>There are no reviews yet.</p>
                            <h4>Be the first to review “Nooma (Copy)”</h4>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <h4>Your rating *</h4>
                            <StarRating />
                            <h4>Your review *</h4>

                            <div>
                                <div>
                                    <label>Name *</label>
                                    <input type='text' />
                                </div>
                                <div> 
                                    <label>Email *</label>
                                    <input type='text' />

                                </div>
                            </div>
                            <textarea cols='30' rows="10">
                            </textarea>
                            <label style={{marginTop: '1rem'}}>
                                <input  type='checkbox' />
                            Save my name, email, and website in this browser for the next time I comment.
                            </label>
                            <DefaulBtn title="Submit" secondary styles={{marginBlock: '1.5rem'}} />
                        </div>
                    </>
                    
                ) : (
                    <div className='product-review'>
                        <h2  className='p-sm-sc'> Reviews </h2>
                        <h4>Reviews</h4>
                        <p>There are no reviews yet.</p>
                        <h4>Be the first to review “Nooma (Copy)”</h4>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <h4>Your rating *</h4>
                        <StarRating />
                        <h4>Your review *</h4>

                        <div>
                            <div>
                                <label>Name *</label>
                                <input type='text' />
                            </div>
                            <div> 
                                <label>Email *</label>
                                <input type='text' />

                            </div>
                        </div>
                        <textarea cols='30' rows="10">
                        </textarea>
                        <label style={{marginTop: '1rem'}}>
                            <input  type='checkbox' />
                        Save my name, email, and website in this browser for the next time I comment.
                        </label>
                        <DefaulBtn title="Submit" secondary styles={{marginBlock: '1.5rem'}} />
                    </div>
                )
                }
            </div>
            <div className='related-products'>
                <h2>Related products</h2>
                <div className='related-products-container'>
                <Swiper    spaceBetween={0}
                                 slidesPerView={4}
                                 loop={true}
                                 autoplay={{ delay: 1500 }}
                                 style={{ marginTop: 50 }}
                                 pagination>
                    { relatedProducts.map((product) => {
                    return (
                        <SwiperSlide>
                        <ProductItem name={product.name} image={product.image} rating={product.rating} priece={product.priece}/>
                        </SwiperSlide>
                    )

                })}
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default  Product;