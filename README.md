# Thesis AWS serverless backend

This project was created in spring 2022. The purpose is to connect to
three different serverless backend API:s and test their functionality. Would they
be suitable for running a smaller serverless application?

## Available Links
- baseurl/v1/user - register a new user
- baseurl/v1/user/login - login a new user
- baseurl/v1/test - test route with simple message returned
- baseurl/v1/auth - test route only available with valid token, returns message and provider

# Todo in order to run on aws

- Install serverless *npm install -g serverless*
- Create an AWS account and create an IAM User according to https://www.serverless.com/framework/docs/providers/aws/guide/credentials
- Download this repository and run *npm install*
- Run *serverless deploy*
- The environmental variable JWT_SECRET needs to be added through the serverless dashboard in the deployed app (to authenticate tokens)


### Changes
2022-04-18 Backend API created with connection to DynamoDB and using jsonwebtoken for authentication,
tutorial followed from the Serverless channel https://www.youtube.com/watch?v=XTJImzRH8aY&list=PLIIjEI2fYC-BZliSOIhWUqiiwadhCvewg with aid of documentation https://www.serverless.com/framework/docs/providers/aws

2022-04-25 First commit to github with above mentioned structure
2022-05-28 Updated createUser so that CORS allows all origins.
