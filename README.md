# Thesis AWS serverless backend

This project was created in spring 2022. The purpose is to connect to
three different serverless backend API:s and test their functionality. Would they
be suitable for running a smaller serverless application?

## Available Links
- baseurl/v1/user - register a new user
- baseurl/v1/user/login - login a new user
- baseurl/v1/test - test route only available with valid token

# Todo in order to run on aws

- Install serverless *npm install -g serverless*
- Create an AWS account and create an IAM User according to https://www.serverless.com/framework/docs/providers/aws/guide/credentials
- Download this repository and run *npm install*
- Run *serverless deploy*


### Changes
2022-04-18 Backend API created with connection to DynamoDB and using jsonwebtoken for authentication,
tutorial followed from the Serverless channel https://www.youtube.com/watch?v=XTJImzRH8aY&list=PLIIjEI2fYC-BZliSOIhWUqiiwadhCvewg with aid of documentation https://www.serverless.com/framework/docs/providers/aws

2022-04-25 First commit to github with above mentioned structure
