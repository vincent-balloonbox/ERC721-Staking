import { NetworksUserConfig } from 'hardhat/types';
import { EtherscanConfig } from '@nomiclabs/hardhat-etherscan/dist/src/types';

export const networks: NetworksUserConfig = {
    coverage: {
        url: 'http://localhost:8555',
    },
    // mumbai:{
    //     url: 'https://polygon-mumbai.infura.io/v3/YOUR-INFURA-API-KEY',
    //     chainId: 80001,
    //     accounts: ["YOUR_PK_HERE"]
    // }
    // rinkeby: {
    //     url: 'https://rinkeby.infura.io/v3/YOUR-INFURA-API-KEY',
    //     chainId: 4,
    //     accounts: [ "YOUR_PK_HERE" ]
    // },
    // mainnet: {
    //     url: 'https://mainnet.infura.io/v3/YOUR-INFURA-KEY',
    //     chainId: 1,
    //     accounts: [ "YOUR_PK_HERE" ]
    // },
};

export const etherscan: EtherscanConfig = {
    // apiKey: 'YOUR-ETHERSCAN-API-KEY',
};