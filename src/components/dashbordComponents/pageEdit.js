import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../../css/dashboard/page_edit.css'
function objectToArray(obj) {
    return Object.keys(obj).map(key => [key, obj[key]]);
}
function replaceCamelCase(str) {
    // Replace camel case with spaces
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Capitalize the first letter of each word
    return str.replace(/\b\w/g, char => char.toLowerCase());
}
function isArray(variable) {
    return Array.isArray(variable);
}
function transformArray(arr) {
    return arr.map(item => Object.values(item));
}
export default function PageEdit() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const componentName = searchParams.get('page');
    const [componentData, setComponentData] = useState({})

    useEffect(() => {
        fetchData();
    }, []); // Fetch data on component mount

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.thehydrologist.com/getComponent.php?name=${componentName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();

            setComponentData(objectToArray(JSON.parse(jsonData)));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div>
            {componentData.length ?
                <div className="page_edit-container">
                    {componentData?.map((item, index) => {
                         if (isArray(item[1]));
                        return (
                            <div>
                            <h2> {item[0]}: </h2> <input type="text" value={item[1]} />
                            </div>
                         /*    <div key={index} >
                                {isArray(item[1]) ?
                                    <>
                                      
                                       {transformArray(item[1]).map((it,idx) => {
                                           return (
                                               <>
                                                    <input type="text" value={it[1]} />
                                               </>

                                           )
                                       })}
                                       
                                    </> 
                                    :
                                    <> */
                               
                        /*             </>
                                }

                            </div>
 */
                        )
                    })}
                    {/*  <div>
                    <h2>about us heading: </h2> <input type="text" value={componentData.aboutUsHeading} />

                    </div>
                    <div> 
                    <h2>about us text: </h2> <textarea type="text" value={componentData.aboutUsText} />

                    </div> */}
                </div>
                : <>
                    <h1>there no data man</h1></>}
        </div>
    )
}