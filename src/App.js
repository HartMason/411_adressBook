import { useEffect, useState } from "react";
import Axios from "axios";
import AdressDetails from "./Components/AdressDetails";

import "./App.css";

const App = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    Axios.get("https://randomuser.me/api?results=25").then((response) => {
      setdata(response.data.results);
    });
  }, []);

  const handleClick = (button) => {
    console.log(data);
  };

  return (
    <div className="App">
      <header>Address Book</header>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      <ul>
        {data.map((item) => (
          <AdressDetails key={item.login.uuid} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
