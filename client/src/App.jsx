import { useState,useEffect } from 'react'
import abi from "./contractJson/Messages.json"
import {ethers} from "ethers"
 import AddParticipant from './components/AddParticipant'
 import AddMessage from './components/AddMessage'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="0x8b174f78d00Ecbfd90a7b281c29a280af820d1Fd";
      const contractABI=abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[]
  
  )
  return (
    <div >
      <Navbar/>
      <small>Connected Account - {account}</small>

      <AddParticipant state={state} />
      <AddMessage state={state} />
  </div>
  )
}

export default App