# aws-lambda-template-generator 🤟💀🤟

CLI tool for generating AWS Lambda function template. It will create a folder with files for whichever lambda function example you choose (see the lambda function options in the table below).

The project is still very new. We are looking for collaborators who can enrich our lambda template selections. Come to our git repo and contribute to the project!

At the moment, most of the templates use [serverless](https://www.serverless.com/). We have a template with [SAM](https://aws.amazon.com/serverless/sam/) (AWS Serverless Application Model). We are working towards adding more templates with SAM in the future. So, stay tuned if you are into SAM. As for language support, we currently have TypeScript and JavaScript. We are planning to add more languages.

<br />

## Why do you want to use it?

The template has everything you need to deploy a production-ready lambda function, including AWS resources creation, solid code examples, unit tests, integration tests, deployment pipeline and configurations ready to deploy lambda into multiple environments (e.g. dev, tst, stg, prod). Easy to use configuration files with solid explanations on what each configuration does.

<br />

## List of lambda functions ✨

Template Name                            | Languages              | Framework        | Use Case                                                                                        | 
---------------------------------------- | ---------------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
multiple-api-proxy                       | TypeScript             | Serverless       | Integration. API proxy, GET and POST requests, single endpoint, multiple paths with API gateway |
simple-api-proxy                         | TypeScript, JavaScript | Serverless, SAM  | Integration. Basic example with API gateway                                                     |
amazon-connect-metrics-to-kinesis        | TypeScript             | Serverless       | Real-time data ingestion for Amazon connect metrics to Kinesis                                  |
step-function-schedule-lambda-every-30s  | TypeScript, JavaScript | Serverless       | Scheduling lambda function faster than 60s (beyond CloudWatch Event scheduling capability)      |
graphql-hello-world                      | TypeScript, JavaScript | Serverless, SAM  | Lambda function with GraphQL support. Simple function that returns hello world message.         |
graphql-dynamodb                         | TypeScript             | Serverless       | Lambda function with GraphQL with DynamoDb. Endpoint supports both queries and mutations.       |
<br />

## Get Started 🏄🏻‍♀️

Install the module globally. It will add the command generate-lambda-template.

```bash
npm i -g aws-lambda-template-generator
```

Then, run the generate-lambda-template command with the name of your project. Default project name is my-lambda if you don't pass the argument.

```bash
generate-lambda-template my-new-lambda-function
```

Follow the prompt.

<img src="img/cli-img.png" />
