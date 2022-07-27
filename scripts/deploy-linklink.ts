import hardhat, { ethers } from 'hardhat';

async function deploylinklink() {
	await hardhat.run('compile');

	console.log("Deploying...");
	const ERC721Staking = await ethers.getContractFactory("chainlinx");
	const erc721Staking = await ERC721Staking.deploy();
	await erc721Staking.deployTransaction.wait(10);
	console.log("Staking Contract deployed to:", erc721Staking.address);

	/**
	 * Verify Contracts
	 */
	console.log('Verifying Staking Contract on Etherscan...');
	await hardhat.run('verify:verify', {
		address: erc721Staking.address,
	});
}

module.exports = deploylinklink;