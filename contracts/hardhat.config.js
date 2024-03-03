require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks: {
    testnet: {
      url: "https://treehacks-devnet.rpc.caldera.xyz/http",
      chainId: 2162024,
      accounts: []
    },
  },
};
