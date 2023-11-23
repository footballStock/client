import AWS from 'aws-sdk';
import {AWSConfig} from '../states/types';

export default class AWSInterface {
  private config: AWSConfig;

  constructor(config: AWSConfig) {
    this.config = config;
  }

  connect(): AWS.S3 {
    AWS.config.update({
      accessKeyId: this.config.accessKeyId,
      secretAccessKey: this.config.secretAccessKey,
      region: this.config.region,
    });

    return new AWS.S3({params: {Bucket: this.config.bucket}});
  }

  async downloadFiles(s3: AWS.S3, folderPath: string): Promise<any[]> {
    try {
      const listObjs = await s3
        .listObjects({Bucket: this.config.bucket, Prefix: folderPath})
        .promise();

      const imagePromises =
        listObjs.Contents?.map(async item => {
          if (item.Key) {
            const imageResponse = await s3
              .getObject({Bucket: this.config.bucket, Key: item.Key})
              .promise();
            const imageBlob = new Blob([imageResponse.Body as Buffer], {
              type: 'image/png',
            });
            const imageUrl = URL.createObjectURL(imageBlob);

            return {Key: item.Key, Image: imageUrl};
          }
        }) || [];

      return Promise.all(imagePromises);
    } catch (error) {
      console.error('Error downloading files:', error);
      throw error;
    }
  }
}
