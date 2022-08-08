exports.handler = (event, context) => {
  console.log(event);
  console.log('Hello server logs');
  return {
    statusCode: 200,
    body: JSON.stringify({ name: 'James'})
  }
};