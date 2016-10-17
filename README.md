# CLAUDIA: AWS LAMBDA + API GATEWAY

## Prerequisite
- [AWS command line tools](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- An IAM user with privileges for the actions shown in the following sample policy:

```json
{
  "Version": "v1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iam:CreateRole",
        "iam:PutRolePolicy",
        "lambda:CreateFunction",
        "iam:PassRole",
        "lambda:UpdateAlias",
        "lambda:CreateAlias",
        "apigateway:POST",
        "apigateway:GET",
        "lambda:GetPolicy",
        "lambda:AddPermission",
        "apigateway:PUT",
        "lambda:GetFunctionConfiguration",
        "lambda:UpdateFunctionCode",
        "apigateway:DELETE"
      ],
      "Resource": "*"
    }
  ]
}
```
- For the user, be sure to [configure the aws cli](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) if you haven't already

## Instructions
- `git clone https://github.com/wekilledit/claudia-aws-lambda-api.git`
- `cd claudia-aws-lambda-api`
- `npm install`
- `claudia create --region ap-southeast-2 --api-module server`

The last command is a sample, you may wish to change the region depending on your needs.

## What will be created
- IAM role labelled "<project name>-executor"
- API Gateway labelled "<project name">
- Lambda function labelled "<project name>"

## Accessing the API
After completing the instructions, in the command lien you will be presented with a connection string that looks similar to: `https://dobagqa1kc.execute-api.ap-southeast-2.amazonaws.com/latest/`

Simply add the get request to the end of the url. E.g. `hello?name=Matt`
