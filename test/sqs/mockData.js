exports.getData = () => {
    return {
        Records: [
            {
                messageId: '19dd0b57-b21e-4ac1-bd88-01bbb068cb78',
                receiptHandle: 'MessageReceiptHandle',
                body: JSON.stringify({status: 'ok'}),
                attributes: {
                    ApproximateReceiveCount: '1',
                    SentTimestamp: '1523232000000',
                    SenderId: '123456789012',
                    ApproximateFirstReceiveTimestamp: '1523232000001'
                },
                messageAttributes: {},
                md5OfBody: '7b270e59b47ff90a553787216d55d91d',
                eventSource: 'aws:sqs',
                eventSourceARN: 'arn:aws:sqs:us-east-2:123456789012:MyQueue',
                awsRegion: 'us-east-2'
            }
        ]
    };
};

exports.getDataWithAttributes = () => {
    return {
        Records: [
            {
                messageId: '19dd0b57-b21e-4ac1-bd88-01bbb068cb78',
                receiptHandle: 'MessageReceiptHandle',
                body: JSON.stringify({status: 'ok'}),
                attributes: {
                    ApproximateReceiveCount: '1',
                    SentTimestamp: '1523232000000',
                    SenderId: '123456789012',
                    ApproximateFirstReceiveTimestamp: '1523232000001'
                },
                messageAttributes: {
                    attribute: {
                        stringValue: 'this is an attribute'
                    }
                },
                md5OfBody: '7b270e59b47ff90a553787216d55d91d',
                eventSource: 'aws:sqs',
                eventSourceARN: 'arn:aws:sqs:us-east-2:123456789012:MyQueue',
                awsRegion: 'us-east-2'
            }
        ]
    };
};
