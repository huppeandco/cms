import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/pages/uploadpage.css'
/* const account_identifier = '7df61279e54b624e190dda435068ac92';
const url = `https://api.cloudflare.com/client/v4/accounts/${account_identifier}/images/v1`;
const apiKey = 'GKJpaiEgp-3cqNN0W4TR58rTW7XxsKCeGCUms_Ds';
const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'multipart/form-data'
  }; */
  const cats = ['YOUNGSTER','well-being', 'mixologist', 'gensis-well','mom-club','leaves-beans','functional-drinks','essentials', 'be-youty', 'b-helthy'];

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [errorMsg, setErrMsg ] = useState('');
    const [txt, setTxt ] = useState('');
    const [loader, setLoader] = useState(false);
    const [category, setCategory] = useState('')
    const [values, setValues] = useState({
        price: '',
        name: '',
        rating: '',
        quantity: '',
        description: '',
        category: ''
      });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
    };
    
    useEffect(() => {
        setImageUrl(file);
        
    }, [file])

    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };


      const handleUploadImage = async () => {
        const formData = new FormData();
         formData.append('image', file);
        try {
            
            const response = await axios.post('https://thehydrologist.com/post-img.php', formData);
            setTxt('→ image upload success');
            return response.data;
          
          } catch (error) {
            console.error(error);
        
            setTxt('failed small time')
        }
        
    };


    const handleUploadData = async (uploadedImageUrl) => {
        let price = values.price + ' AED'
        const formData = new FormData();
        formData.append('price', price);
        formData.append('name', values.name);
        formData.append('imageurl', uploadedImageUrl); 
        formData.append('rating', values.rating);
        formData.append('quantity', values.quantity);
        formData.append('description', values.description);
        formData.append('category', category);

        try {
            const response = await axios.post('https://thehydrologist.com/post-product.php', formData);
           
        } catch (error){
            console.error(error); 
            setTxt('failed small time')
        }
    }

    const handleUploadAll = async () => {
        setLoader(true);
        if(file == ''  || values.name == '' || values.price == '' ||  category == '') {
            setErrMsg('please fill the neccerry fields before');
            setLoader(false);
            return;
        }

        try {
            const uploadedImageUrl = await handleUploadImage(); // Wait for image upload
            if (uploadedImageUrl) {
                await handleUploadData(uploadedImageUrl); // Wait for data upload
                setTxt('successed big time');
                setLoader(false);
                setValues({
                    price: '',
                    name: '',
                    rating: '',
                    quantity: '',
                    description: '',
                    category: ''
                  });
                  setCategory('')
                  setFile('')

                // Both image and data have been uploaded successfully
            } else {
                console.error('Image upload failed');
                setTxt('failed big time');
            }
        } catch (error) {
            console.error(error);
            setTxt('failed big time');
        }
    }

    return (
        <div className='upload-page' style={{width: '100%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'center', paddingRight: '5vw'}}>
            {loader && <div className='upload-page-loader' > 
            <div class="spinner-loader"></div>
            </div>}
            <div  style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <input type='number' name='price' placeholder='priece' onChange={handleInputChange} value={values.price}/>
            <input  type='text' name='name' placeholder='product name' onChange={handleInputChange} value={values.name} />
            <input  type='number' placeholder='rating' max={5} name='rating' onChange={handleInputChange} value={values.rating} />
            <input  type='number' placeholder='quantity' name='quantity' onChange={handleInputChange} value={values.quantity} />
            <textarea style={{width: '50%', height: 100 ,margin: 10}} placeholder='enter a description ....' type='text' name='description' onChange={handleInputChange} value={values.description} />
            <h4>choose category for product: </h4>
            <div className='upload-product-cats' style={{display: 'flex', flexWrap: 'wrap', width: '80%', marginBottom: '2rem'}}>
                {
                    cats.map((cat) => {
                        return (
                            <button onClick={() => setCategory(cat)} className={`${category == `${cat}` ? 'active': ''}`}>{cat}</button>
                            
                        )
                    }) 
                }
               
            </div>
            </div>
            <div  style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
                <p style={{color: 'red'}}>{errorMsg}</p>
                <div >
                    <input type="file" onChange={handleFileChange} />
                    {imageUrl && (
                        <div>
                            
                            <img style={{width: 100, height: 'auto'}} src={imageUrl} alt="Uploaded" />
                        </div>
                    )}
                    <p>{txt}</p>
                    <button onClick={handleUploadAll}>Upload</button>

                </div>
            </div>
        </div>
    );
}

export default ImageUpload;
