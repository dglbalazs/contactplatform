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

export async function uploadImageToBucket(file : File, contactId: number) {
    
    // const reader = new FileReader();

    // reader.onload = (event) => {
    //     const arrayBuffer = event.target?.result as ArrayBuffer; // Ensure the result is an ArrayBuffer
    //     const buffer = Buffer.from(arrayBuffer);
    //     const params = ({
    //         Body: new Blob([file], { type: file.type }),
    //         Bucket: bucketName,
    //         Key: contactId.toString(),
    //         ContentType: file.type, // Set the content type from the file
    //         ACL: 'public-read', // Set the access control
    //     })

    //     s3.putObject(params, (err, data) => {
    //         if (err) {
    //             console.error('Error uploading to S3:', err);
    //         } else {
    //             console.log('Successfully uploaded to S3:', data);
    //         }
    //     });
    // }
    // reader.readAsArrayBuffer(file);
}

export const s3BaseUrl = "https://" + bucketName + ".s3.eu-central-1.amazonaws.com/"