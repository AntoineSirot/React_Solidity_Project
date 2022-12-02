import './../../App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./../Routes";

function FakeNefturiansUserInfo() {


    return (
      <div className="App">
          <h2>Fake Nefturians User Info</h2>
          <a href="/">
              <button>Go back to the main page here</button> 
          </a>
      </div>
    );
  }

export default FakeNefturiansUserInfo;
