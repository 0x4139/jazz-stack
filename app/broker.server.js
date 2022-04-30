/**
 * @typedef {import('moleculer').ServiceBroker} ServiceBroker Moleculer's Context
 */

const { ServiceBroker } = require("moleculer")
/**
 * ServiceBroker is used to call microservices from the remix action or loader context.
 * @type ServiceBroker
 */
let broker

if (!global.__serviceBroker) {
  global.__serviceBroker = new ServiceBroker(require("./../services.config"))
  global.__serviceBroker.start()
}
broker = global.__serviceBroker

export { broker }
