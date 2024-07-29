import { useEffect, useState } from 'react'
import '../css/components/mobileapp.css'



const BatteryIcon = () => (
  <svg 
    width="24px" 
    height="24px" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path 
        d="M7.5 10V14M11.5 10V14M21 13V11M6.2 18H16.8C17.9201 18 18.4802 18 18.908 17.782C19.2843 17.5903 19.5903 17.2843 19.782 16.908C20 16.4802 20 15.9201 20 14.8V9.2C20 8.0799 20 7.51984 19.782 7.09202C19.5903 6.71569 19.2843 6.40973 18.908 6.21799C18.4802 6 17.9201 6 16.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" 
        stroke="#000000" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
const WifiIcon = () => (
    <svg 
      width="24px" 
      height="24px" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path 
          d="M1.33309 8.07433C0.92156 8.44266 0.886539 9.07485 1.25487 9.48638C1.62319 9.89791 2.25539 9.93293 2.66691 9.5646L1.33309 8.07433ZM21.3331 9.5646C21.7446 9.93293 22.3768 9.89791 22.7451 9.48638C23.1135 9.07485 23.0784 8.44266 22.6669 8.07433L21.3331 9.5646ZM12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21V19ZM12.01 21C12.5623 21 13.01 20.5523 13.01 20C13.01 19.4477 12.5623 19 12.01 19V21ZM14.6905 17.04C15.099 17.4116 15.7315 17.3817 16.1031 16.9732C16.4748 16.5646 16.4448 15.9322 16.0363 15.5605L14.6905 17.04ZM18.0539 13.3403C18.4624 13.7119 19.0949 13.682 19.4665 13.2734C19.8381 12.8649 19.8082 12.2324 19.3997 11.8608L18.0539 13.3403ZM7.96372 15.5605C7.55517 15.9322 7.52524 16.5646 7.89687 16.9732C8.2685 17.3817 8.90095 17.4116 9.3095 17.04L7.96372 15.5605ZM4.60034 11.8608C4.19179 12.2324 4.16185 12.8649 4.53348 13.2734C4.90511 13.682 5.53756 13.7119 5.94611 13.3403L4.60034 11.8608ZM2.66691 9.5646C5.14444 7.34716 8.41371 6 12 6V4C7.90275 4 4.16312 5.54138 1.33309 8.07433L2.66691 9.5646ZM12 6C15.5863 6 18.8556 7.34716 21.3331 9.5646L22.6669 8.07433C19.8369 5.54138 16.0972 4 12 4V6ZM12 21H12.01V19H12V21ZM12 16C13.0367 16 13.9793 16.3931 14.6905 17.04L16.0363 15.5605C14.9713 14.5918 13.5536 14 12 14V16ZM12 11C14.3319 11 16.4546 11.8855 18.0539 13.3403L19.3997 11.8608C17.4466 10.0842 14.8487 9 12 9V11ZM9.3095 17.04C10.0207 16.3931 10.9633 16 12 16V14C10.4464 14 9.02872 14.5918 7.96372 15.5605L9.3095 17.04ZM5.94611 13.3403C7.54544 11.8855 9.66815 11 12 11V9C9.15127 9 6.55344 10.0842 4.60034 11.8608L5.94611 13.3403Z" 
          fill="#000000"
        />
      </g>
    </svg>
  );


const SignalIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    width="24px" 
    height="24px" 
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path 
        d="M4 20V19M8 20V16M12 20V12M16 20V8M20 20V4" 
        stroke="#000000" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </g>
  </svg>
);






export default function MobileApp() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [selectedScreen, setSelectedScreen] = useState('tabs/home');
    const [page, setPage] = useState({});
    const [changed, setChanged] = useState(false);
    const screens = [
        'tabs/home',
        'tabs/account',
        'tabs/search',
        'tabs/my orders',
    ]

    useEffect(() => {
        // Define the async function inside useEffect
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.thehydrologist.com/get-app-media.php?screen=tabs');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
               
                setData(result);
                if (selectedScreen == 'tabs/home' && data) setPage(JSON.parse(data[0].screen_content).home)
            } catch (error) {

            } finally {
                setLoading(false);
            }
        };

        // Call the function to fetch data
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedScreen == 'tabs/home' && data) setPage(JSON.parse(data[0].screen_content).home)
        }, [data])
    useEffect(() => {
        if (selectedScreen == 'tabs/home' && data) setPage(JSON.parse(data[0].screen_content).home)
            setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [selectedScreen]);
    useEffect(() => {
        if(data) {
           /*  console.log(data) */
            console.log(JSON.parse(data[0].screen_content))
        }
        
    }, [page]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPage((prevPage) => ({
            ...prevPage,
            [name]: value,
        }));
        setChanged(true)
    };
    const handleSubmit = async () => {
       /*  setData(prevState => {
            // Make a copy of the previous state
            const newState = [...prevState];
            // Update the screen_content of the first object (or whichever object you want to update)
            newState[0].screen_content = JSON.stringify(page);
            return newState;
        }); */
        setLoading(true)
        let formData = new FormData();
        formData.append('screen_name', 'tabs');
        formData.append('screen_data', JSON.stringify({home: page}));
        try {
            const response = await fetch('https://api.thehydrologist.com/set-app-media.php', {
                method: 'POST',
                body: formData
            });


            if (!response.ok) {
                throw new Error('Failed to add new cat');
            }
            setLoading(false)

           

            // Handle success response if needed
            console.log('New cat added successfully');
        } catch (error) {
            console.error('Error adding new cat:', error);
            setLoading(false)
        }
    }
    return (
        <div style={{ alignItems: 'center', padding: 15, justifyContent: 'center', display: 'flex', flexDirection: 'column', background: '#ebedeb' }}>

            <div style={{ display: 'flex', width: '80%', alignSelf: 'center', justifyContent: 'center' }}>
                <div style={{ width: 380, height: 800, border: '10px solid black', borderRadius: 25, position: 'relative', background: '#fff', padding: 15, paddingTop: 35, filter: ' drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.6))' }}>
                    <div style={{ position: 'absolute', top: 10, left: '50%', borderRadius: '50%', background: '#000', height: 20, width: 20, transform: 'translateX(-50%)' }}></div>
                    <div style={{position: 'absolute', top: 0, right: 10, display: 'flex'}}>
                        <SignalIcon />
                        <div style={{margin: 5}}></div>
                        <WifiIcon />
                        <div style={{margin: 5}}></div>
                        <BatteryIcon />
                    </div>
                    <div style={{position: 'absolute', top: 0, left: 15, display: 'flex'}}>
                        <h5 style={{fontSize: 12, fontWeight: 400, marginTop: 10}}> etisalat</h5>
                    </div>
                    <div style={{ position: 'absolute', top: '30%', left: -15, height: 60, width: 10, background: '#000', borderRadius: 15 }}></div>
                    <div style={{ position: 'absolute', top: '40%', left: -15, height: 100, width: 10, background: '#000', borderRadius: 15 }}></div>
                    {loading && <div className='phone-loader-container'>
                        <div className="phone-loader"></div>

                    </div>}

                    {
                        selectedScreen == 'tabs/home' && !loading &&
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                            <div className='screen-element'>
                                <h5>Hero Banner logged in: </h5>
                                <input
                                    type='text'
                                    name='hero_banner_title_logged_in'
                                    value={page.hero_banner_title_logged_in}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='screen-element'>
                                <h5>Hero Banner logged out: </h5>
                                <input
                                    type='text'
                                    name='hero_banner_title_logged_out'
                                    value={page.hero_banner_title_logged_out}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='screen-element'>
                                <h5>Hero button logged in: </h5>
                                <input
                                    type='text'
                                    name='hero_banner_button_logged_in'
                                    value={page.hero_banner_button_logged_in}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='screen-element'>
                                <h5>Hero button logged out: </h5>
                                <input
                                    type='text'
                                    name='hero_banner_button_logged_out'
                                    value={page.hero_banner_button_logged_out}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='screen-element'>
                                <h5>Hero Banner subtitle logged in: </h5>
                                <input
                                    type='text'
                                    name='hero_banner_subtitle_logged_in'
                                    value={page.hero_banner_subtitle_logged_in}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='screen-element'>
                                <h5>Hero Banner subtitle logged out: </h5>
                                <input
                                    type='text'
                                    name='hero_banner_subtitle_logged_out'
                                    value={page.hero_banner_subtitle_logged_out}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    }



                </div>
                <div>
                    {
                        screens.map((screen, index) => {
                            return (
                                <div onClick={() => setSelectedScreen(screen)} key={index} style={{ border: selectedScreen == screen ? '1px solid rgb(28, 90, 111)' : '1px solid #000', borderRadius: 12, width: 150, margin: 10, cursor: 'pointer', height: 50, alignItems: 'center', justifyContent: 'center', background: selectedScreen == screen ? 'rgb(28, 90, 111)' : '#fff' }}>
                                    <h4 style={{ marginTop: 15, fontWeight: 400, color: selectedScreen == screen ? '#fff' : 'rgb(28, 90, 111)', }}> {screen} </h4>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        changed && 
                                <div onClick={() => handleSubmit() } style={{ border:  '1px solid #000', borderRadius: 12, width: 150, margin: 10, cursor: 'pointer', height: 50, alignItems: 'center', justifyContent: 'center', background: 'rgb(28, 90, 111)' }}>
                                    <h4 style={{ marginTop: 15, fontWeight: 400, color:  '#fff', }}> Submit Changes </h4>
                                </div>
                     
                    }
                </div>

            </div>
        </div>
    )
}