import { ethers } from "hardhat";

const main = async () => {
  const [signer] = await ethers.getSigners();
  //const nonce = await signer.getNonce();

  //const address = ethers.getCreateAddress({ from: signer.address, nonce });

  const deploy = await signer.sendTransaction({ data: "0x630000007980600E6000396000F36004361063000000335760003560E01C806371e44efa1415630000003257630000003863000000043560F81C630000003A565B5B600080FD5B005B6000819050600063000000538263000000026300000070565B90506300000062816300000066565B5050565B8063000000005550565B8082029350505056" });
  const receipt = await deploy.wait();
  const address = receipt!.contractAddress!;
  console.log("contract address:", address);

  const attrBefore = await signer.provider.getStorage(address, 0);
  console.log("attr before:", attrBefore);

  const call = await signer.sendTransaction({
    to: address,
    data: "0x71e44efa01"
  });
  console.log("call txhash:", call.hash);

  const attrAfter = await signer.provider.getStorage(address, 0);
  console.log("attr after:", attrAfter);

  //const output = await ethers.provider.getStorage(address, 0);

  //console.log(output);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
