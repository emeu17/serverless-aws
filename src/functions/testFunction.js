'use strict';

module.exports.testFunction = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless! This is a test route deployed on AWS.',
      provider: 'AWS',
      input: event,
    }),
  };
};
