
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
          <div class = "footer"></div>
          <div class = "footer"></div>
          <div class = "footer"></div>
          <div class = "footer"></div>
          <h2>Welcome on the main Page !</h2>
          <p> Here you can find command for the other pages :</p>
           <div class="switchPages"> <a href="/ChainInfo">Chain Info</a> </div>
           <div class="switchPages"><a href="/FakeBayc">Fake Bayc</a></div>
           <div class="switchPages"><a href="/FakeMeebits">Fake Meebits</a></div>
           <div class="switchPages"><a href="/FakeNefturians">Fake Nefturians</a></div>
          <div class = "footer"></div>
          <div class = "footer"></div>
          <div class = "footer"></div>
          <div class = "footer"></div>
          <div class = "footer"></div>
          <div class = "footer"></div>
   
          
      </div>
    );
  }

export default Main;



