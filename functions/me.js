/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */

  const me = {
    name: 'James'
  };
  
      return {
        statusCode: 200,
        body: JSON.stringify(me)
      }
}
