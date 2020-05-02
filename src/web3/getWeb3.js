import Web3 from "web3";            // Know more : https://web3js.readthedocs.io/en/v1.2.7/
const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Connecting Program To BlockChain Node
    window.addEventListener("load", async () => {
      // Check If Connected to Blockchain
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use MetaMask's provider if available.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Connect Directly If metamask is not Present
      else {
        const provider = new Web3.providers.HttpProvider(
            "https://e0hxqvxbu7:DWq23BfI7ieTXmB4BodIDLKvirN37yb_juKxc-NHmIg@e0hjr0v783-e0rwwtnto1-rpc.de0-aws.kaleido.io"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

export default getWeb3;