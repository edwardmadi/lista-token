import { deployDirect, deployProxy } from "./tasks";
import hre from "hardhat";

async function main() {
  const signers = await hre.ethers.getSigners();
  const deployer = signers[0].address;

  const feeReceiver = "0x34B504A5CF0fF41F8A480580533b6Dda687fa3Da";

  const rewardToken = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";
  await deployProxy(hre, "StakingVault", deployer, rewardToken, feeReceiver);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });