import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

function App() {
  const [greeting, setGreetingValue] = useState()
  const isWindowEthereum = window.ethereum !== 'undefined'
  // Requests metamask account when setGreeting triggered
  async function requestAccounts() {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
  }

  async function fetchGreeting() {
    // READ: Calls contract and reads current greeting
    if (!greeting) return
    if (isWindowEthereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = 
    }
  }

  async function setGreeting() {
    // WRITE: Calls contract and sends update

    if (isWindowEthereum) { }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
      </header>
    </div>
  );
}

export default App;
