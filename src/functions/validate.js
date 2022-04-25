'use strict'
const jwt = require('jsonwebtoken')

module.exports.validate = async (event, context) => {
    const authorizerToken = event.authorizationToken
    //The string is build up like Bearer: token
    const authorizerArr = authorizerToken.split(' ')
    const token = authorizerArr[1]

    //first part should be Bearer, second the token
    if (authorizerArr.length !== 2 ||
        authorizerArr[0] !== 'Bearer' ||
        authorizerArr[1].length === 0) {
            return generatePolicy('undefined', 'Deny', event.methodArn)
    }
    //decode token with jwt
    let decodedJwt = jwt.verify(token, process.env.JWT_SECRET)
    if (typeof decodedJwt.username !== 'undefined' &&
    decodedJwt.username.length > 0) {
        return generatePolicy(decodedJwt.username, 'Allow', event.methodArn)
    }
    generatePolicy('undefined', 'Deny', event.methodArn)
}

// Help function to generate an IAM policy
const generatePolicy = function(principalId, effect, resource) {
    let authResponse = {};

    authResponse.principalId = principalId;
    if (effect && resource) {
        let policyDocument = {}
        policyDocument.Version = '2012-10-17'
        policyDocument.Statement = []
        let statementOne = {}
        statementOne.Action = 'execute-api:Invoke'
        statementOne.Effect = effect
        statementOne.Resource = resource
        policyDocument.Statement[0] = statementOne
        authResponse.policyDocument = policyDocument
    }
    return authResponse
}
