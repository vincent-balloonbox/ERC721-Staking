import hardhat, { ethers } from 'hardhat';

async function deployStakingContract(
	nftCollection: string,
	rewardsToken: string,
) {
	await hardhat.run('compile');

	console.log("Deploying...");
	const ERC721Staking = await ethers.getContractFactory("StakingContract");
	const erc721Staking = await ERC721Staking.deploy(
		nftCollection,
		rewardsToken,
	);
	await erc721Staking.deployTransaction.wait(10);
	console.log("Staking Contract deployed to:", erc721Staking.address);

	/**
	 * Verify Contracts
	 */
	console.log('Verifying Staking Contract on Etherscan...');
	await hardhat.run('verify:verify', {
		address: erc721Staking.address,
		constructorArguments: [nftCollection, rewardsToken]
	});
}

module.exports = deployStakingContract;