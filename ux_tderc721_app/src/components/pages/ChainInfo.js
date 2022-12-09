import './../../App.css';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

var Web3 = require('web3');
const web3 = new Web3(window.ethereum)




function ChainInfo() {



  const [walletAddress, setWalletAddress] = useState("");
  const [chainID, setChainID] = useState("");
  const [lastBlock, setLastBlock] = useState("");
  const [root, setRoot] = useState("");

  

    //string s
    //s.match("yes : \w+")


    
    useEffect(() => {
      getInfos()
    }, [chainID]);

    useEffect(() => {
      if (window.ethereum) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
      }
    });


    

    async function getInfos() {
      const accounts = await window.ethereum.request
      ({
        method: "eth_requestAccounts",
      });
     const ID = await web3.eth.getChainId();
     setChainID(ID);
     const BlockNumber = await web3.eth.getBlockNumber();
     setLastBlock(BlockNumber);
     setWalletAddress(accounts[0]);
     console.log({chainID})
     if (chainID != '' & chainID != '11155111') // Looking at chainID != '' because ID = await web3.eth.getChainId(); so we need to know that it's done before veryfing it
      {
      console.log('Wrong Network !')
      setRoot(<Navigate replace to="./../WrongNetwork" />)
      
     }
    }
    
    return (
      <div className="ChainInfo">
          <h2>Chain Info</h2>
          <a href="/">
              <button>Go back to the main page here</button> 
          </a>
          <p>Chain ID : {chainID}</p>
          <p>Address : {walletAddress}</p>
          <p>Last Block : {lastBlock}</p>
          {root}
      </div>
    );

    
    }


export default ChainInfo;
