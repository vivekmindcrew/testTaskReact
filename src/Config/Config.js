const Cryptr = require('cryptr');
const cryptr = new Cryptr('restopos@36547858');
const config = {
    baseUrl: "http://localhost:6001",
    cryptr: cryptr
}

export default config;