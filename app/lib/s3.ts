import * as aws from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const region = "eu-central-1";
const bucketName = "dglcontainer1";
const accessKeyId = process.env.AWS_ACCESS_KEY1;
const secretAccessKey = process.env.AWS_SECRET_KEY1;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
});


// Upload Function

export async function generateUploadURL(contactId: number) {
  
    const params = ({
      Bucket: bucketName,
      Key: contactId.toString(),
    })
    
    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
  }

export const s3BaseUrl = "https://" + bucketName + ".s3.eu-central-1.amazonaws.com/"

export async function deleteObject(contactId: number) {

    const params = ({
        Bucket: bucketName,
        Key: contactId.toString(),
      })

    s3.deleteObject(params, (err, data) => {
        if (err) {
        console.error('Error deleting object from S3:', err);
        } else {
        console.log('Successfully deleted object from S3:', data);
    }
    
  });
}