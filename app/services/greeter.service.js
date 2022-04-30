"use strict"

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
  name: "greeter",

  /**
   * Settings
   */
  settings: {},

  /**
   * Dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {
    /**
     * Say a 'Hello' action.
     *
     * @returns
     */
    hello: {
      async handler() {
        return "Hello World"
      },
    },

    /**
     * Welcome, a username
     *
     * @param {String} name - User name
     */
    welcome: {
      /** @param {Context} ctx  */
      async handler(ctx) {
        return `Welcome, ${ctx.params.name}`
      },
    },
  },

  /**
   * Events
   */
  events: {},

  /**
   * Methods
   */
  methods: {},

  /**
   * Service created lifecycle event handler
   */
  created() {},

  /**
   * Service started lifecycle event handler
   */
  async started() {},

  /**
   * Service stopped lifecycle event handler
   */
  async stopped() {},
}
