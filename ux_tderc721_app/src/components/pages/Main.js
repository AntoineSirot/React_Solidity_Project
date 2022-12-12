
import './../../App.css';
import { useEffect } from 'react';



function Main() {


  async function Connexion() {
    console.log('Connection to Metamask...');
      if(window.ethereum) {  
        try {
          console.log('Connected to Metamask !');
        } 
        catch (error) {
          console.log('Error connecting...');
        }
      } 
      else {
        alert('Meta Mask not detected');
      }
  }



  useEffect(() => {
    Connexion()
  }, [])


    return (
      <div className="App">
          <h2>Welcome on the main Page !</h2>
          <p> Here you can find command for the other pages :</p>
          <ul> 
            <li> <a href="/ChainInfo">Chain Info</a> </li>
            <li> <a href="/FakeBayc">Fake Bayc</a> </li>
            <li> <a href="/FakeMeebits">Fake Meebits</a> </li>
            <li> <a href="/FakeNefturians">Fake Nefturians</a> </li>
          </ul>
      </div>
    );
  }

export default Main;



