/**
 * Cars.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
    },
    brand: {
      type: 'string',
    },
    year: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    payDay: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
  },

};

