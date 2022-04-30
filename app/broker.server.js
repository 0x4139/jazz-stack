const { ServiceBroker } = require("moleculer")

let broker = ServiceBroker

if (!global.__serviceBroker) {
  global.__serviceBroker = new ServiceBroker(require("./../services.config"))
  global.__serviceBroker.start()
}
broker = global.__serviceBroker

export { broker }
