# 🔐 Decentralised Identity Verification System Using Blockchain

A  DApp to register, verify, and retrieve user identity securely using Ethereum blockchain.

**Livesite Link**: https://identity-dapp-nehal.netlify.app/
---

## ✅ Features

- Register Identity with Full Name and ID Number
- Admin can verify users' identity
- Retrieve identity info (including verification status)
- Connects to MetaMask and interacts with smart contract deployed on Ethereum-compatible networks

---

## 📦 Prerequisites

- MetaMask Wallet Extension
- Node.js (for any future expansions, optional here)
- Remix IDE (for smart contract deployment)
- Web3.js (already included via CDN in frontend)

---

## 🚀 Steps to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/NehalSahu8055/Decentralised-Identity-Verification-Sysytem-Using-Blockchain
cd <project-folder>
```

## 2. Deploy Smart Contract

- Open `IdentityVerification.sol` in **Remix IDE**
- Compile it using Solidity compiler version `^0.8.x`
- Deploy it using **Injected Provider - MetaMask**
- Copy the deployed **Contract Address**

## 3. Get the ABI

- In Remix file explorer, navigate to:  
  `artifacts → IdentityVerification_metadata.json`
- Copy the `abi` array from the JSON
- Paste it into a new file named `contractAbi.json` inside the `frontend` folder

## 4. Update Frontend

- Open `index.html` and update the following line:

  ```js
  const contractAddress = "your_deployed_contract_address_here";
  ```

## 5. Run the Frontend
- Simply open index.html in your browser

- Ensure MetaMask is connected to the correct network (same as the deployed contract)

## 🛠 Usage Guide
## 🔐 Register Identity
- Enter Full Name and ID Number
- Click on "Register"

## 🛂 Verify Identity (Admin only)
- Enter user's wallet address
- Click "Verify" [ Only Admin can verify whose abi and contract address is there in main.js ]

## 🔍 Get Identity
- Enter wallet address
- Click "Get Identity"
- Displays name, ID number, and verification status

## 📁 Project Structure
```js
Decentralised-Identity-Verification/
│
├── contractAbi.json         # ABI JSON pasted from Remix
├── index.html               # Frontend code
├── IdentityVerification.sol # Solidity Smart Contract
├── frontend/                # Frontend assets
│   ├── style.css            # CSS for styling the frontend
│   └── main.js              # JavaScript for frontend logic
└── README.md                # You’re reading this!

```

