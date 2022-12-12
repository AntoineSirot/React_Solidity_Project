import './../../App.css';
import { useState } from 'react';

var Web3 = require('web3');
const web3 = new Web3(window.ethereum)

function FakeMeebits() {

    const [tokenId, setTokenId] = useState(0);
    const [initialized , setInitialized] = useState(false);
    const [minted , setMinted] = useState("");

    const ABI = [{"inputs":[{"internalType":"uint256","name":"_maxTokenId","type":"uint256"},{"internalType":"address","name":"_ERC721address","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_account","type":"address"},{"indexed":false,"internalType":"bool","name":"_value","type":"bool"}],"name":"UpdateWhitelist","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenNumber","type":"uint256"},{"indexed":false,"internalType":"address","name":"_tokenClaimer","type":"address"}],"name":"aTokenWasClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_withdrawer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_funds","type":"uint256"}],"name":"withdrawFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_tipper","type":"address"}],"name":"yeeeeeeaaaaaahThxCoeurCoeurCoeur","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_tokenToClaim","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"claimAToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokensThatWereClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_value","type":"bool"}],"name":"updateWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawTips","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const contract_address = "0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55"
    const contract = new web3.eth.Contract(ABI, contract_address)

    const jsonSig = require("../../output-sig.json"); 



    const handleInput = event => {
      setTokenId(event.target.value);
      setInitialized(true);
    };

    async function mintToken() {
      if (initialized) {
        const accounts = await window.ethereum.request(
          {
            method: 'eth_requestAccounts' 
          });
        if ( await contract.methods.tokensThatWereClaimed(tokenId).call() )
        {
          setMinted("This token has alredy been mint");
        }
        else
        {
          const _signature = jsonSig[tokenId].signature;  
          await contract.methods.claimAToken(tokenId,_signature).send({from: accounts[0]});
          setMinted("Your token has been minted!");
        }
      }
      else {

      }
    }

    

    return (
      <div className="App">
          <h2>Fake Meebits</h2>
          <a href="/">
              <button>Go back to the main page here</button> 
          </a>
          <p><input onChange={handleInput} placeholder="Enter tokenID.."/>
          <button onClick={mintToken}>Mint the Meebits with your token ID</button></p>
          <p>{minted}</p>
      </div>
    );
  }

export default FakeMeebits;
