/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log('******** Running with SAM... ********');
  console.log('Body:', JSON.stringify(event.body));
  console.log('**************************************');

  return {
    statusCode: 200,
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify('Hello from Lambda!'),
  };
};

// Run lambda (event.json used)
// ----------------------------------------------------
// $ sam local invoke -e ./src/event.json MyFunction
// ----------------------------------------------------

// Run lambda with API (event.json not used)
// ----------------------------------------------------
// $ sam local start-api
// ----------------------------------------------------

// Build layer
// ----------------------------------------------------
// $ sam build MyLayer --build-dir <output-directory-location>
// ----------------------------------------------------
