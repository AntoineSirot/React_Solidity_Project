import './../../App.css';
import { useParams } from "react-router-dom";



function FakeNefturiansUserInfo() {

    const {address} = useParams();

    return (
      <div className="App">
          <h2>Fake Nefturians User Info</h2>
          <a href="/">
              <button>Go back to the main page here</button> 
          </a>
          <h3>Address of Owner : {address}</h3>
      </div>
    );
  }

export default FakeNefturiansUserInfo;
