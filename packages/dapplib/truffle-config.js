require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture stool cost punch provide gown light army gas'; 
let testAccounts = [
"0xd9ade8da47b2162a4baa19067d5b5ee4714def08b7c48b815f85647b45ee8036",
"0x4c3081bbcc6271a30da31e46916e6f4c81c9e4d7152e74d5ae1c708bd218091a",
"0x6a37ebb579f2c388a3daba2384c51a27d4286611da8e83581d8881089722f4ef",
"0xeffdad413e97ecdc9285a930f19e4b31aeb16f3a1ffc83ec87d3153d021b3c97",
"0x1c8f9b1b45f05168113586f64c3cba9562a6fb14f596d73f27fd3d04ab7d1b92",
"0x1c97b65d4de21117e993a9cbf682844b043fd54db0e81dc4400fb1a8b76997f5",
"0x8207b2eb26b4c0aa65399c271763a9cede11b6fb7d4e11edbccdf1685f84f031",
"0x1cd077001f4a50b78b126a8c246e9c32711fff397bf0fcc7175b5c6c2b249ab1",
"0x395f88ce440a115d7589b886106d119f2e5f6c3f7b8167b0b3b7e4eac27614a8",
"0x64719b78010fcc8cea2d6b382b9978890f09b6bd7334479f21492f97fe808dd2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

