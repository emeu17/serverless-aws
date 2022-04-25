'use strict';
const bcrypt = require('bcryptjs')
const AWS = require('aws-sdk')
const jwt = require('jsonwebtoken')

module.exports.login = async (event, context) => {
    const body = JSON.parse(event.body)

    const queryUserParams = {
        TableName: process.env.DYNAMODB_USER_TABLE,
        KeyConditionExpression: '#username = :username',
        ExpressionAttributeNames: {
            '#username': 'pk'
        },
        ExpressionAttributeValues: {
            ':username': body.username
        }
    }

    let userResult = {}
    // try retrieving the record from the db
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        userResult = await dynamodb.query(queryUserParams).promise()
    } catch (queryError) {
        console.log('There was an error attempting to retrieve the user')
        console.log('queryError', queryError)
        console.log('queryUserParams', queryUserParams)
        return new Error('There was an error retrieving the user')
    }

    // confirm that there is one item retrieved
    if (typeof userResult.Items !== 'undefined' &&
    userResult.Items.length === 1) {
        // compare passwords
        const compareResult = bcrypt.compareSync(body.password, userResult.Items[0].password)
        if (compareResult) {
            // generate the jwt token
            let token = jwt.sign({
                username: userResult.Items[0].pk
            }, process.env.JWT_SECRET)
            return {
                statusCode: 200,
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({
                    token: token
                })
            }
        }
    }
    return {
        statusCode: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          message: "User/password not found"
        })
    };
};
