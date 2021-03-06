'use strict';

module.exports.testFunction = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: 'This is a test route on AWS!',
      input: event,
    }),
  };
};
