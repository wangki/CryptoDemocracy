// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 2545,
      network_id: '*' // Match any network id
    },
    // rinkeby
    rinkeby: {
        host: "localhost", // Connect to geth on the specified
        port: 8545,
        from: "0x664a4192E68d3b1Cbd0a8fCc8Ad8E447dbD9A31B", // default address to use for any transaction Truffle makes during migrations
        network_id: 4,
        gas: 9612388 // Gas limit used for deploys
    }
  }
}
