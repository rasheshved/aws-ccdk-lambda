import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const handler = new Function(this,'Hello-World-CDK',{
      runtime: Runtime.NODEJS_LATEST,
      memorySize: 512,
      handler: 'helloworld.handler',
      code: Code.fromAsset(join(__dirname,'../lambdas'))
    })
  }
}
