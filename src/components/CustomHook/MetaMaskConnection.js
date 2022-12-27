import Web3 from "web3";
async function loadWeb3Data(step) {
  await loadWeb3(step);
  const state = await loadBlockchainData();
  console.log(state)
  return state;
}
async function loadWeb3(step) {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    if (step !== "check") await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask !"
    );
  }
}
async function loadBlockchainData() {
  try {
    const web3 = window.web3;
   const accounts = await web3.eth.getAccounts();
    let ethBalance = await web3.eth.getBalance(accounts[0]);
    ethBalance = web3.utils.fromWei(ethBalance, "ether");
    const state = {
      account: accounts[0],
      balance: ethBalance,
    };
 
    return state;
  } catch (err) {
    return null;
  }
}

export default loadWeb3Data;