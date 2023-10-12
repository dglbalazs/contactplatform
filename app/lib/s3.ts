import * as aws from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const region = "eu-central-1";
const bucketName = "dglcontainer1";
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

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
      Expires: 60
    })
    
    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
  }


export async function uploadImageToBucket(file : File, contactId: number) {
    
    const params = ({
        Body: file,
        Bucket: bucketName,
        Key: contactId.toString(),
        ContentType: file.type, // Set the content type from the file
    })

    try {
        const result = await s3.putObject(params).promise();
        console.log("Sikeresen feltöltve - ", result);
    } catch (error) {
        console.error("Hiba a feltöltés során - ", error);
        throw error;
    }
}

export const s3BaseUrl = "https://" + bucketName + ".s3.eu-central-1.amazonaws.com/"