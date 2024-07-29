import axios from "axios";
import { useEffect, useRef, useState } from "react";
import DraggableList from 'react-draggable-list';
import { SpinnerIcon } from "./dashboardLogin";

const FolderOpen = () => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            <path
                d="M12 10V16M12 10L10 12M12 10L14 12M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);
const FolderClosed = () => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            <path
                d="M12 10V16M12 16L10 14M12 16L14 14M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);


function removeDuplicateObjects(array, key) {
    // If no key is provided, stringify the objects for comparison
    const uniqueObjects = key ? Array.from(new Map(array.map(item => [item[key], item])).values()) : Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);
    return uniqueObjects;
}
function sortByCatOrder(array) {
    return array.sort((a, b) => a.cat_order - b.cat_order);
}

function ReOrderByIndex(array) {
    array.forEach((obj, index) => {
        obj.cat_order = index + 1;
        console.log(index);
    });
}

const GrabberIcon = () => {
    return (
        <svg
            width="34px"
            height="34px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            fill="none"
            stroke="#575757"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <circle cy="5.5" cx="2.5" r=".75"></circle>
                <circle cy="5.5" cx="8" r=".75"></circle>
                <circle cy="5.5" cx="13.5" r=".75"></circle>
                <circle cy="10.5" cx="2.5" r=".75"></circle>
                <circle cy="10.5" cx="8" r=".75"></circle>
                <circle cy="10.5" cx="13.5" r=".75"></circle>
            </g>
        </svg>
    );
};
const PenIcon = () => {
    return (
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
                    d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </g>
        </svg>
    );
};

async function fetchCats() {
    try {
        const response = await axios.get('https://api.thehydrologist.com/fetch-cats.php');
        let allProducts = response.data;
        let newItems = [...allProducts]
        newItems.forEach((item, index) => {
            item.cat_subs = JSON.parse(item.cat_subs)
        })
        return newItems;
    } catch (error) {
        throw error;
    }
}


function SubItem({ name, index, setCats, catName }) {
    const [edit, setEdit] = useState(false);
    const [subname, setSubname] = useState(name);

    const handleOnChange = (e) => {
        setSubname(e.target.value);
    }
    const handleOk = () => {
        setCats((prevCats) => {
            let newCats = [...prevCats];


            newCats.forEach((cat) => {
                if (cat.cat_name === catName) {

                    cat.cat_subs[index].name = subname

                }


            });
            return newCats;
        })
    }
    return (
        <>
            {edit ?
                <div style={{ display: 'flex', width: '50%' }}>
                    <input style={{ flex: 9, border: '0px', borderBottom: '1px solid', background: 'transparent' }} value={subname} onChange={handleOnChange} />
                    <button style={{ flex: 1, background: '#ffffff14', border: 'none' }} onClick={handleOk}> ok</button>
                </div>
                :
                <div style={{ height: 25 }}>
                    <p style={{ marginBlock: 4, width: '89%', textAlign: 'left', paddingLeft: 25 }} >{subname}</p>
                    <button style={{ background: 'transparent', border: 'none', transform: 'translateY(-25px' }} onClick={() => setEdit(true)}>
                        <PenIcon />

                    </button>
                </div>}
        </>
    )
}


const Item = ({ item, dragHandleProps, setCats, color }) => {
    const { onMouseDown, onTouchStart } = dragHandleProps;
    const [edit, setEdit] = useState(false);
    const [values, setValues] = useState({
        name: item.cat_name,
        color: item.cat_color,
        subs: item?.cat_subs || []
    });
    const [opened, setOpened] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleUpdatinList = () => {
        setCats((prvCats) => {
            let newCats = [...prvCats];

            newCats.forEach((cat) => {
                if (cat.cat_name === item.cat_name) {
                    cat.cat_name = values.name;
                    cat.cat_color = values.color;
                }
            });

            return newCats;
        })
    }
    return (
        <div
            className="disable-select"

            style={{

                margin: "4px",
                padding: "0px",
                display: "flex",
                position: "relative",
                height: opened ? 'auto' : 42,
                justifyContent: "space-around",
                background: "white",
                userSelect: "none",
                position: 'relative',
                width: "97%",
                border: `3px solid ${item.cat_color}`,
                borderRadius: 5,
                flexDirection: 'column',
                transition: 'all .3s linear',
                paddingLeft: 50



            }}
        /* onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)} */
        >
            {edit ?
                <div style={{ display: 'flex' }}>
                    <input className="no-border-input" type="text" value={values.name} name="name" onChange={handleChange} style={{flex: 3}} /> <input style={{flex: 1}} className="no-border-input" type="text" name="color" value={values.color} onChange={handleChange} />

                </div>
                :
                <>
                    <span style={{textAlign: 'left', paddingLeft: 20, paddingTop: 8}}> <span style={{color}}>({item.cat_order})</span> - {item.cat_name}</span>
                </>
            }
            <div style={{ paddingLeft: 20, paddingBlock: opened ? 20 : 0, marginTop: 10, background: item.cat_color, backdropFilter: 'opacity(.3)', height: opened ? 'unset' : 0, overflow: 'hidden', }}>
                {Array.isArray(values.subs) &&
                    values.subs?.map((subitem, index) => {
                        return (
                            <SubItem catName={item.cat_name} setCats={setCats} name={subitem.cat_name} index={index} key={index} />
                        )
                    })
                }
            </div>
            <div
                className="disable-select dragHandle"
                style={{


                   width: '50px',

                    backgroundColor: "transparent",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    cursor: "grab",
                    bottom: 0,
                    paddingTop: 5,
                    zIndex: 2
                }}
                onTouchStart={(e) => {
                    e.preventDefault();
                    console.log("touchStart");
                    e.target.style.backgroundColor = "blue";
                    document.body.style.overflow = "hidden";
                    onTouchStart(e);
                }}
                onMouseDown={(e) => {
                    console.log("mouseDown");
                    document.body.style.overflow = "hidden";
                    onMouseDown(e);
                }}
                onTouchEnd={(e) => {
                    e.target.style.backgroundColor = "black";
                    document.body.style.overflow = "visible";
                }}
                onMouseUp={() => {
                    document.body.style.overflow = "visible";
                }}
            >
                <GrabberIcon />
            </div>
            <div

                style={{


                    width: "35px",

                    backgroundColor: item.cat_color,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    cursor: "grab",

                    bottom: opened ? "" : 0,
                    paddingTop: 10,
                    zIndex: 2
                }}
                onClick={() => setEdit(true)}>
                {edit ?
                    <button onClick={handleUpdatinList}>  Ok </button>
                    :

                    <PenIcon />

                }
            </div>
            <div

                style={{


                    width: "65px",

                    backgroundColor: item.cat_color,
                    position: 'absolute',
                    top: 0,
                    right: 35,
                    cursor: "grab",

                    bottom: 0,
                    paddingTop: 10,
                    zIndex: 2
                }}
            >
                {opened ?
                    <>
                        <button onClick={() => setOpened(false)} style={{border: 'none', background: 'transparent', outline: 'none'}}>
                            <FolderOpen />

                        </button>
                    </>
                    :
                    <>
                        <button onClick={() => setOpened(true)} style={{border: 'none', background: 'transparent', outline: 'none'}}>
                            <FolderClosed />

                        </button>
                    </>}
            </div>
        </div>
    );
};
function Modal({ close, list, handSubmition, loading }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(true)
    }, [])
    return (
        <>
            <div onClick={close} style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '100%', zIndex: 50, background: '#0000005c', backdropFilter: 'blur(20px)' }}></div>
            <div style={{ position: 'fixed', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, top: open ? '53%' : '70%', opacity: open ? 1 : 0, left: '50%', width: 450, zIndex: 51, background: 'white', transform: 'translate(-50%, -50%)', transition: '.5s all ease-in' }}>
                <p> are you satasfied with this:</p>
                {list.map((item, index) => {
                    return (
                        <div key={index} style={{ display: 'flex', padding: 10, textAlign: 'left', width: '90%' }}>
                            <span>({item?.cat_order})-</span>
                            <span>{item?.cat_name}</span>
                            <span style={{ width: 80, marginLeft: 10, borderBottomRightRadius: 40, background: item.cat_color, color: 'white' }}>{item?.cat_color}</span>

                        </div>
                    )
                })}
                <div style={{ marginBottom: 20 }}></div>
                <div style={{ display: 'flex', height: 40, width: 350, marginBottom: 20 }}>
                    <button style={{ padding: 10, flex: 1, marginLeft: 5 }} onClick={handSubmition}>
                        {loading ?
                            <SpinnerIcon />
                            :
                            <>
                                yes i'm sure
                            </>
                        }
                    </button>
                    <button style={{ padding: 10, flex: 1, marginLeft: 5 }} onClick={close}>no return</button>
                </div>
            </div>
        </>
    )
}


export default function ManageCategories() {
    const [cats, setCats] = useState([]);
    const [add, setAdd] = useState(false);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('unset');
    const [values, setValues] = useState({
        color: '',
        name: '',
    });
    const [submit, setSubmit] = useState(false);
    useEffect(() => {
        fetchCats()
            .then((cats) => {
                // Log the JavaScript object
                setCats(sortByCatOrder(removeDuplicateObjects(cats)));

                // Update state with the fetched products
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });

    }, [])
    /*  onStart={this.handleStart}
     onDrag={this.handleDrag}
     onStop={this.handleStop} */




    const containerRef = useRef();

    const _onListChange = (newList) => {
        setCats(newList);
        setColor('red')
        
    };
    const handleReorder = () => {
        window.scrollTo(0, 0);
        setColor('#005c12');
        setTimeout(() => {
            setColor('unset')
        }, 2000)
        if (cats.length > 0) {
            /*  setCats((prev) => {
               return ReOrderByIndex(prev);
             }); */
            let newCats = [...cats];
            ReOrderByIndex(newCats);
            setCats(newCats);
        }
    }
    const handlAddNew = () => {
        setCats((prev) => {
            let cats = [...prev, {
                cat_name: values.name,
                cat_color: values.color,
                cat_order: prev.length + 1
            }];
            return cats

        })
    }
    function DraggableListItem({ item, dragHandleProps }) {
        return (
            <Item item={item} color={color} dragHandleProps={dragHandleProps} setCats={setCats} />
        )
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
    const handSubmition = async () => {
        setLoading(true)
        let formData = new FormData();
        formData.append('cats', JSON.stringify({ cats: cats }));
        try {
            const response = await fetch('https://api.thehydrologist.com/set-cats.php', {
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
    };

    return (
        <div style={{ width: '100%', marginTop: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {submit && <Modal loading={loading} handSubmition={handSubmition} close={() => setSubmit(false)} list={cats} />}
            {cats?.length > 0 ?
                <>
                    <div
                        ref={containerRef}
                        style={{ touchAction: "pan-y", background: "#ececec", marginInline: 30, width: '70%', transition: 'all .3s ease' }}>
                        <DraggableList
                            itemKey="cat_name"
                            template={DraggableListItem}
                            list={cats}

                            onMoveEnd={(newList) => _onListChange(newList)}
                            container={() => containerRef.current}
                        />
                        {add ?
                            <div style={{ display: 'flex' }}>
                                <input type="text" name='name' value={values.name} onChange={handleChange} />
                                <input type="text" name='color' value={values.color} onChange={handleChange} />
                                <button onClick={handlAddNew}>ok</button>
                            </div>
                            :
                            <div onClick={() => setAdd(true)} style={{ padding: 12, background: 'white', marginBottom: 10, border: '1px solid', cursor: 'pointer', borderRadius: 5 }} className="dark-hover"> add new</div>
                        }
                    </div>

                    <button style={{ width: '70%', padding: 10, marginBlock: 6 }} onClick={handleReorder}>Reorder</button>
                    <button style={{ width: '70%', padding: 10, marginBlock: 6 }} onClick={() => setSubmit(true)}>Submit</button>

                </> :
                <>
                    <SpinnerIcon />
                </>
            }


        </div>
    )
}