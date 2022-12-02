import './../../App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./../Routes";

function FakeBayc() {


    return (
      <div className="App">
          <h2>Fake Bayc</h2>
          <a href="/">
              <button>Go back to the main page here</button> 
          </a>
      </div>
    );
  }

export default FakeBayc;
