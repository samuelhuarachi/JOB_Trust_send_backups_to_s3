require('dotenv').config();

const fs = require("fs");
const path = require("path")
// const { Upload } = require("@aws-sdk/lib-storage");
// const { S3Client, S3 } = require("@aws-sdk/client-s3");

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;

const AWS = require('aws-sdk');
const moment = require('moment');

AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region
});

const s3 = new AWS.S3();

(async() => {
    try {
        const isMysql = process.argv.includes("mysql");
        const isImagens = process.argv.includes("imagens");
        const isUnidades = process.argv.includes("unidades");

        if (!isMysql && !isImagens && !isUnidades) return;

        let file_to_upload = ""
        if (isMysql) {
            file_to_upload = "trusdb.sql"
        }

        if (isImagens) {
            file_to_upload = "imagens.tar.gz"
        }

        if (isUnidades) {
            file_to_upload = "unidades.tar.gz"
        }


        const file_name = moment(new Date()).get("D") % 2;
        const filePath = path.join(__dirname, '../../', file_to_upload);

        const params = {
            Bucket,
            Key: 'backups/' + file_name + '_' + file_to_upload,
            Body: fs.createReadStream(filePath) // Use stream here
        };

        s3.upload(params)
                .on('httpUploadProgress', (progress) => {
                    //console.log(`Uploaded ${progress.loaded} of ${progress.total} bytes`);
                })
                .promise()
                .then((data) => {
                    //console.log('Upload Success', data.Location);
                })
                .catch((err) => {
                    //console.error('Upload Failed', err);
                });
    } catch (e) {
        //console.log("Error uploading data: ", e);
    }
})()
