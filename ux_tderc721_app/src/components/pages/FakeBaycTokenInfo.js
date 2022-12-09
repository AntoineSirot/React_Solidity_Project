import './../../App.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {IpfsImage} from "react-ipfs-image";

var Web3 = require('web3');
const web3 = new Web3(window.ethereum)

function FakeBaycTokenInfo() {


    const [error, setError] = useState("");
    const [infos, setInfos] = useState("");
    const [image, setImage] = useState("");
    const [token, setToken] = useState(0);
    const [intialized, setInitiliaze] = useState(false);



    const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimAToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const contract_address = "0x1dA89342716B14602664626CD3482b47D5C2005E"

    const contract = new web3.eth.Contract(ABI, contract_address)

    let {tokenId} = useParams();



    useEffect(() => {
      getTokenInfo()
    }, []);
    

    

    async function getTokenInfo() {
      
      const number = await contract.methods.totalSupply().call()
      if (parseInt(tokenId) >= number) {
        setError(<h1>! This token does not exists !</h1>)
      }
      else {
        setError("")
        const uri = await contract.methods.tokenURI(tokenId).call();
        const urijson = await fetch(uri).then(x => x.json());
        let image = await urijson.image
        image = (<><h3>Bored Ape #{ tokenId }</h3>
        <IpfsImage hash={image}/>
        </>);
        let s = ""
        for (let i = 0; i < urijson.attributes.length; i++) {
          s += urijson.attributes[i].trait_type + " : " + urijson.attributes[i].value + "; "
        } 
        setInfos(s)
        setImage(image);
      }
    }

    const handleInput = event => {
      setToken(event.target.value);
      setInitiliaze(true)
    };

    function getTokenDetail() {
      if (intialized == true) {
        window.open('/fakeBayc/' + token, "_self")
      }
      else {
        console.log("Please enter a value before submition")
      }
    }

    function Main_Page() {
      window.open("/", "_self");
    }


    return (
      <div className="App">
          <h2>Fake Bayc Token Info</h2>
          <p>
              <button  onClick={Main_Page}>Go back to the main page here</button> 
          </p>
          {error}
          {infos}
          {image}
          <h3> Other Bored Ape : </h3>
          <input onChange={handleInput} placeholder="Enter tokenId.."/>
            <button onClick={getTokenDetail}>See information about the Bored Ape</button>


      </div>
    );

  }

export default FakeBaycTokenInfo;