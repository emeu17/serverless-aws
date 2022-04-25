'use strict';

const AWS = require('aws-sdk')
const bcrypt = require('bcryptjs')

module.exports.createUser = async (event, context) => {
    const body = JSON.parse(event.body)
    const username = body.username
    const password = body.password
    const newUserParams = {
        TableName: process.env.DYNAMODB_USER_TABLE,
        Item: {
            pk: username,
            password: bcrypt.hashSync(password, 10)
        }
    }
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const putResult = await dynamodb.put(newUserParams).promise()
        return {
            statusCode: 201,
            headers: {
                'Acess-Control-Allow-Origin': '*',
                'Acess-Control-Allow-Credentials': true,
                'Acess-Control-Allow-Headers': 'Authorization',
            }
        }
    } catch(putError) {
        console.log('There was an error putting the new item')
        console.log('putError', putError)
        console.log('newUserParams', newUserParams)
        return new Error('There was an error putting the new item')
    }
};
