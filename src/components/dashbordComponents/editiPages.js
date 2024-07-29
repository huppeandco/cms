import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function downloadDivAsImage(divId, fileName) {
    // Get the HTML element
    var element = document.getElementById(divId);
  
    // Create a canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
  
    // Set canvas dimensions to match the div
    canvas.width = element.offsetWidth;
    canvas.height = element.offsetHeight;
  
    // Create an image
    var img = new Image();
  
    // Draw the content of the div onto the canvas
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
      
        // Convert canvas to image
        var dataUrl = canvas.toDataURL("image/png");
      
        // Create a link element
        var link = document.createElement('a');
        link.href = dataUrl;
        link.download = fileName + ".png";
      
        // Append link to the body
        document.body.appendChild(link);
      
        // Trigger the download
        link.click();
      
        // Clean up
        document.body.removeChild(link);
    };
  
    img.src = "data:image/svg+xml," + encodeURIComponent(new XMLSerializer().serializeToString(element));
}


function formatString(str) {
    // Replace camel case with space
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Remove everything after underscore
    str = str.split('_')[0];
    return str.toLowerCase();
}
const handleClick = () => {
    downloadDivAsImage('testing-example', 'fart')
}
export default function EditPages({setTab}) {
    
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchData();
    }, []); // Fetch data on component mount

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.thehydrologist.com/getComponent.php?pages');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const textStyle = {
        fontSize: '60px', // Font size 40 pixels
        fontFamily: 'Arial, sans-serif', // Example font family
        fontWeight: 'bold', // Example font weight
        color: 'transparent', // Blue water theme color
        WebkitTextStroke: '3px rgb(28 90 111)', // Text stroke with 1px width and black color
      };
    
    return (
        <div>
            {
                data.length > 0 ?
                    <div id='testing-example' style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                       
                        {
                            data.map((item, index) => {
                                return (
                                    <div style={{ width: '80%', height: '50vh', position: 'relative', overflow: 'hidden', border: '2px solid #0000006b', borderRadius: 5, marginBlock: 5 }}>
                                        <iframe
                                            src={`https://hydro-react.vercel.app/${formatString(item.name) == 'home' ? '' : formatString(item.name)}`}
                                            title={item.name}
                                            scrolling='no'
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                border: 'none',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                overflow: 'hidden',
                                                opacity: .5,
                                                pointerEvents: 'none',
                                                filter: 'blur(5px)'
                                                

                                            }}
                                            sandbox="allow-scripts allow-same-origin"
                                        />
                                        <h1 onClick={() =>  navigate(`/page_edit?page=${item.name}`) } style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',cursor: 'pointer', ...textStyle }}>
                                           Edit Content {formatString(item.name)}
                                        </h1>

                                    </div>
                                )
                            })
                        }
                    </div>
                    : <></>
            }
        </div>
    )
}