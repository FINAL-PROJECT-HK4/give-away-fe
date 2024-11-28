import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import {  mainnet } from '@reown/appkit/networks'


  
// 1. Get projectId
const projectId = '7f7c361a2f3ea6630cee1d2b27bacd65'


// 2. Set the networks

// 3. Create a metadata object - optional
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', 
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet],
  metadata,
  projectId,
  features: {
    analytics: true 
  }
})

export default function Wallet() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Connect Your Wallet</h1>
          
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-gray-700 mb-4">Please connect your wallet to receive rewards</p>
            <w3m-button  />
          </div>
        </div>
      </div>
    );
  }
  