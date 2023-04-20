import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [img, setImg] = useState();
  const [count, setCount] = useState(0);
  const MINUTE_MS = 5000;
  const getPosts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/cp", { responseType: 'blob' });
        const imageObjectURL: any  = URL.createObjectURL(res.data);
       
        setImg(imageObjectURL)
      // const keys = res.data.results[0].series[0].columns;
      // const values = res.data.results[0].series[0].values[0];

      // var obj = [];

      // //for each loop
      // keys.forEach((ele, i) => {
      //   obj[ele] = values[i];
      // });

      // setDatas(obj);
      // //print the obj
      // console.log(obj);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
 
  };
  useEffect(() => {
    getPosts();
    const interval = setInterval(() => {
      console.log("Logs every minute");
      getPosts();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <div className="App">
   
      <h1>CPK realtime </h1>
      <img src={img} alt="" />
  
    </div>
  );
}

export default App;
