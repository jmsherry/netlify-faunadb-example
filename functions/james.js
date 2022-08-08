exports.handler = (event, context, callback) => {
  console.log(event);
  console.log("Hello server logs");
  return callback(null, {
    statusCode: 200,
    headers,
    body: JSON.stringify({ name: "James" }),
  });

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ name: 'James'})
  // }
};
