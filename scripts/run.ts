import { ethers } from "hardhat";

const main = async () => {
  const [signer] = await ethers.getSigners();
  const nonce = await signer.getNonce();

  const address = ethers.getCreateAddress({ from: signer.address, nonce });
  await signer.sendTransaction({ data: "0x6300000005630000000a81810163000000010180630000000055" });
  const output = await ethers.provider.getStorage(address, 0);

  console.log(output);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
