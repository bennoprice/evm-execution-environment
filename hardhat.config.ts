import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";

import * as dotenv from "dotenv"
dotenv.config({ path: ".env" })

const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY)
  throw new Error("Missing PRIVATE_KEY in .env");

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth.llamarpc.com"
      }
    },
    opsepolia: {
      url: "https://optimism-sepolia.blockpi.network/v1/rpc/public",
      chainId: 11155420,
      accounts: [PRIVATE_KEY]
    }
  }
};

export default config;
