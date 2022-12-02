
import './../../App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./../Routes";

function Main() {


    return (
      <div className="App">
          <h2>Welcome on the main Page !</h2>
          <p> Here you can find command for the other pages :</p>
          <ul> 
            <li> <a href="/FakeBayc">Fake Bayc</a> </li>
            <li> <a href="/FakeBayc/:tokenId">Fake Bayc Token Info</a> </li>
            <li> <a href="/chainInfo">ChainInfo</a> </li>
            <li> <a href="/FakeMeebits">Fake Meebits</a> </li>
            <li> <a href="/FakeNefturians">Fake Nefturians</a> </li>
            <li> <a href="/fakeNefturians/:userAddress">Fake Nefturians User Info</a> </li>
          </ul>
      </div>
    );
  }

export default Main;
