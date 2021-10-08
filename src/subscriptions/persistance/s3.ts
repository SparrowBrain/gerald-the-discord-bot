/* istanbul ignore file */
import aws from 'aws-sdk'
import * as config from '../../config'

export const saveToS3 = (channelIds: string[], file: string): void => {
  const s3 = new aws.S3({
    accessKeyId: config.AwsAccessKeyId,
    secretAccessKey: config.AwsSecretAccessKey
  })

  const params = {
    Bucket: 'gerald-the-discord-bot',
    Key: `config/${file}`,
    Body: channelIds.join(',')
  }

  s3.upload(params, function (err: any, data: { Location: any; }) {
    if (err) {
      throw err
    }
    console.log(`File uploaded successfully. ${data.Location}`)
  })
}

export const loadFromS3 = async (file: string): Promise<string[]> => {
  const s3 = new aws.S3({
    accessKeyId: config.AwsAccessKeyId,
    secretAccessKey: config.AwsSecretAccessKey
  })

  var params = {
    Bucket: 'gerald-the-discord-bot',
    Key: `config/${file}`
  }

  const promise = new Promise(
    (resolve, reject) => {
      s3.getObject(params, function (err, data) {
        if (err) {
          reject(err)
        } else {
          const ids = data.Body?.toString().split(',') || []
          resolve(ids)
        }
      })
    })

  return await promise as string[]
}
