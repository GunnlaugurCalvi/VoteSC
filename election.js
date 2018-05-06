import web3 from './web3';
import ElectionCreation from './build/ElectionCreation.json';

const instance = new web3.eth.Contract(JSON.parse(ElectionCreation.interface),
    '0x35B8DD7Edb318ab2ceea68672e61924a1Fd689fB'
);

export default instance;
