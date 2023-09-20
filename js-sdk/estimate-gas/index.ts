import { Provider } from 'zksync-web3';
import { utils } from 'ethers';

const provider = new Provider('https://testnet.era.zksync.dev');

const estimateGas = async () => {
  return await provider.estimateGas({
    // Wrapped ETH address
    to: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4',

    // `function deposit() payable`
    data: '0xd0e30db0',

    // 1 ether
    value: utils.parseEther('1.0'),
  });
};

const [estimate] = await Promise.all([estimateGas()]);

export default [
  `Estimate: ${estimate}`,
  `Estimate: 
    <details>
      <summary>View</summary>
      <pre><code>${estimate}</code></pre>
    </details>
  `,
];
