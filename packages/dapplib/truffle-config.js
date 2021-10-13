require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember assume hope argue front skirt'; 
let testAccounts = [
"0x0cc5ca9a16235085403efbade6998812a9966dfab4fcfcac739b71cf88946b51",
"0x54b2ea407657c5fff55e692fa140b8d35809e6d8a53ca985523e28c12fbbb257",
"0x1ece4c4b79602a8542c2cc9ade7fb8a8b8e5927a71c25ca71f8c62ec859713c9",
"0xcc8787cdf8767af4fcd426c1582551c04bd0c8091e32da98042be1759c0a6a99",
"0xb5787f403e8288beef65830a61ee130e932482a82547034ffbb280cd9b3ddfa9",
"0x9ab0c3be7270152fe4a8379b516b261b2dd023494e467cde8d4ded531f663a56",
"0xf196705b8f8c1449934f5fec4145197f002932cf214a86eb8b891bfffda9f572",
"0xde5f53be65c258a3977b26c63fc19a42f6f2a0743ccc67bd344e2c4313899361",
"0xb360129fd33fe8d08c19938ff673e5bd913668e5c034e28ac80f82bf305c32d3",
"0x838cd29a8186a56d7b3500247a2d31a51b6232890fd4e75ebc5409aa33f4f776"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


