async function main() {
  const SikNFT = await ethers.getContractFactory("SikNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const sikNFT = await SikNFT.deploy();
  console.log("Contract deployed to address:", sikNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0xB2F2c44627543086e4Ab70bfF1b76E5F6466a5AE contract address
//  0x5332c70234eeff05a9a3578cd5dffeca91b8037d422bb2ed6af10f9e380260a4 Mint Hash