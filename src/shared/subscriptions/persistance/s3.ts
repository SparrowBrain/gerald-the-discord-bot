import { Upload } from '@aws-sdk/lib-storage';
import { CompleteMultipartUploadCommandOutput, GetObjectCommandOutput, S3 } from '@aws-sdk/client-s3';
import * as config from '../../../config';

export const saveToS3 = async (channelIds: string[], file: string): Promise<void> => {
  const s3 = new S3({
    region: 'eu-north-1',
    credentials: {
      accessKeyId: config?.AwsAccessKeyId ?? '',
      secretAccessKey: config?.AwsSecretAccessKey ?? ''
    }
  });

  const params = {
    Bucket: 'gerald-the-discord-bot',
    Key: `config/${file}`,
    Body: channelIds.join(',')
  };

  const result = await new Upload({
    client: s3,
    params
  }).done();

  const success = result as CompleteMultipartUploadCommandOutput;
  if (success !== null) {
    console.log(`File uploaded successfully. ${success.Location}`);
  }
};

export const loadFromS3 = async (file: string): Promise<string[]> => {
  const s3 = new S3({
    region: 'eu-north-1',
    credentials: {
      accessKeyId: config?.AwsAccessKeyId ?? '',
      secretAccessKey: config?.AwsSecretAccessKey ?? ''
    }
  });

  const params = {
    Bucket: 'gerald-the-discord-bot',
    Key: `config/${file}`
  };

  const promise = new Promise(
    (resolve, reject) => {
      s3.getObject(params, (err: any, data: GetObjectCommandOutput|undefined) => {
        if (err) {
          reject(err);
        } else {
          const ids = data?.Body?.toString().split(',') || [];
          resolve(ids);
        }
      });
    });

  return await promise as string[];
};
