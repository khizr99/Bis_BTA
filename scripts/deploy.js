
const hre = require("hardhat");

async function main() {
  const Mssg = await hre.ethers.getContractFactory("Messages"); //fetching bytecode and ABI
  const mssg = await Mssg.deploy(); //creating an instance of our smart contract

  await mssg.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${mssg.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//Deployed contract address: 0x8b174f78d00Ecbfd90a7b281c29a280af820d1Fd