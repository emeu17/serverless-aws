'use strict';

module.exports.authFunction = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: 'Go Serverless! This is a test route deployed on AWS.',
      provider: 'AWS',
      input: event,
    }),
  };
};
