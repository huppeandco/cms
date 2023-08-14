import LoaderGif from '../assets/loader_animation.gif';

function FlashScreen() {
    /* const [cls, setCls ] = useState('');
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCls('scale-animation');
          }, 400);
      
          return () => clearTimeout(timeout);
    }, []) */
    return (
      <div className={`flash-screen `} >
        <img src={LoaderGif} style={{width: '100px', height: '100px'}}/>
      </div>
    );
  }


  export default FlashScreen;