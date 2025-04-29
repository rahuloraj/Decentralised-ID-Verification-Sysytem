 let web3;
    let contract;
    let userAddress;
    const contractAddress = "0x81fb8ec1de0cc3de4b65360280ce8d93b56c03aa";

    window.addEventListener('load', async () => {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        userAddress = accounts[0];

        const response = await fetch("contractAbi.json");
        const abi = await response.json();

        contract = new web3.eth.Contract(abi, contractAddress);
        console.log("Contract loaded", contract);
      } else {
        alert("Install MetaMask!");
      }
    });

    async function registerIdentity() {
      const fullName = document.getElementById("fullName").value;
      const idNumber = document.getElementById("idNumber").value;

      if (!fullName || !idNumber) {
        alert("Please fill in both fields.");
        return;
      }

      try {
        await contract.methods.registerIdentity(fullName, idNumber).send({ from: userAddress });
        alert("Identity Registered!");
      } catch (error) {
        console.error(error);
        alert("Error registering identity.");
      }
    }

    async function verifyIdentity() {
      const verifyAddress = document.getElementById("verifyAddress").value;

      if (!verifyAddress) {
        alert("Please enter a user address.");
        return;
      }

      try {
        await contract.methods.verifyIdentity(verifyAddress).send({ from: userAddress });
        alert("Identity Verified!");
      } catch (error) {
        console.error(error);
        alert("Error verifying identity.");
      }
    }

    async function getIdentity() {
      const address = document.getElementById("getIdentityAddress").value;

      if (!address) {
        alert("Please enter a user address.");
        return;
      }

      try {
        const identity = await contract.methods.getIdentity(address).call();
        const identityDetails = `
          <p><strong>Full Name:</strong> ${identity[0]}</p>
          <p><strong>ID Number:</strong> ${identity[1]}</p>
          <p><strong>Verified:</strong> ${identity[2]}</p>
        `;
        document.getElementById("identityDetails").innerHTML = identityDetails;
      } catch (error) {
        console.error(error);
        alert("Error retrieving identity.");
      }
    }