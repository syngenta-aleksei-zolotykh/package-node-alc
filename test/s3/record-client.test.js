const {assert} = require('chai');
const RecordClient = require('../../src').s3.Record;
const mockData = require('./mockData');

describe('Test S3 Record Client', async () => {
    const record = new RecordClient(mockData.getData().Records[0]);
    describe('test constructor', () => {
        it('client took event', () => {
            assert.equal(true, '_record' in record);
        });
    });
    describe('test eventName', () => {
        it('eventName returned', () => {
            assert.equal(record.eventName, 'ObjectCreated:Put');
        });
    });
    describe('test eventSource', () => {
        it('eventSource returned', () => {
            assert.deepEqual(record.eventSource, 'aws:s3');
        });
    });
    describe('test eventTime', () => {
        it('eventTime returned', () => {
            assert.deepEqual(record.eventTime, '2018-09-20T21:10:13.821Z');
        });
    });
    describe('test awsRegion', () => {
        it('awsRegion returned', () => {
            assert.deepEqual(record.awsRegion, 'us-east-1');
        });
    });
    describe('test requestParameters', () => {
        it('requestParameters returned', () => {
            assert.deepEqual(record.requestParameters, {sourceIPAddress: '172.20.133.36'});
        });
    });
    describe('test responseElements', () => {
        it('responseElements returned', () => {
            assert.deepEqual(record.responseElements, {
                'x-amz-request-id': '6B859DD0CE613FAE',
                'x-amz-id-2': 'EXLMfc9aiXZFzNwLKXpw35iaVvl/DkEA6GtbuxjfmuLN3kLPL/aGoa7NMSwpl3m7ICAtNbjJX4w='
            });
        });
    });
    describe('test configurationId', () => {
        it('configurationId returned', () => {
            assert.equal(record.configurationId, 'exS3-v2--7cde234c7ff76c53c44990396aeddc6d');
        });
    });
    describe('test object', () => {
        it('object returned', () => {
            assert.deepEqual(record.object, {
                key: '123456789/3c8e97105d5f462f8896a7189910ee16-original.jpg',
                size: 17545,
                eTag: 'b79ac2ef68c08fa9ac6013d53038a26c',
                sequencer: '005BA40CB5BD42013A'
            });
        });
    });
    describe('test bucket', () => {
        it('bucket returned', () => {
            assert.deepEqual(record.bucket, {
                name: 'deploy-workers-poc-photos',
                ownerIdentity: {
                    principalId: 'A32KFL0DQ3MH8X'
                },
                arn: 'arn:aws:s3:::deploy-workers-poc-photos'
            });
        });
    });
    describe('test s3SchemaVersion', () => {
        it('s3SchemaVersion returned', () => {
            assert.equal(record.s3SchemaVersion, '1.0');
        });
    });
});
