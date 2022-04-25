'use strict';

// tests for authFunction
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('authFunction', '../../../src/functions/authFunction.js', 'authFunction');
const AWS = require('aws-sdk-mock')
const AWS_SDK = require('aws-sdk')
AWS.setSDKInstance(AWS_SDK)
describe('authFunction', () => {
  before((done) => {
    done();
  });

  it('implement tests here', async () => {
    const response = await wrapped.run({});
    expect(response).to.not.be.empty;
  });
});
