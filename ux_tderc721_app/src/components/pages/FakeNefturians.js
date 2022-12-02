import './../../App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./../Routes";

function FakeNefturians() {


    return (
      <div className="App">
          <h2>Fake Nefturians</h2>
          <a href="/">
              <button>Go back to the main page here</button> 
          </a>
      </div>
    );
  }

export default FakeNefturians;
