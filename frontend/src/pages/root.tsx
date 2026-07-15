import '../styles/root.css';
import { useEffect, useState } from "react";
import Troll from '../components/troll';
import LoadingWheel from '../components/loadingWheel';


// ALL COMPONENTS MUST BE PASCAL CASED and all other variables and file names must be camel cased
// caps lock shouting variables are not allowed

function Root() {

    const [loading , setLoading] = useState(true);
    useEffect(() => {
        async function sendIP() {
            try{
                await fetch("http://localhost:5000/api/getIp");
            } finally {
                setLoading(false);
            }
        }
        sendIP(); // calls parallely
    }, []);
    if (loading) {
        return <LoadingWheel />;
    }
    return (
        <div>
            <Troll/>
        </div>
    );
}


export default Root;
