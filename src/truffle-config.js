
const HTTPProviderRateLimitRetry = require('./web3/http-provider-rate-limit-retryy')

//Connecting Truffle to Blochchain to Deploy the Contracts
//know More at  https://www.trufflesuite.com/docs/truffle/reference/configuration
module.exports = {
  networks: {
      development: {
          provider: () => {
              const appCred = 'e0hxqvxbu7:DWq23BfI7ieTXmB4BodIDLKvirN37yb_juKxc-NHmIg'; // from application credential widget
              const connectionURL = 'e0hjr0v783-e0rwwtnto1-rpc.de0-aws.kaleido.io'; // without protocol (https://)
              return new HTTPProviderRateLimitRetry(`https://${appCred}@${connectionURL}`, 100000);
          },
            network_id: "*", // Match any network id
            gasPrice: 0,
            gas: 4500000
        },
  },
}
