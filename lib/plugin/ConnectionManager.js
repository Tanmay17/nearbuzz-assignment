const mongoose = require( 'mongoose' );
const AWS = require( 'aws-sdk' );
const fs =  require( 'fs' );
const path =  require( 'path' );

module.exports = {

    async connectDB() {

        try {

            await mongoose.connect(
                'mongodb://localhost:27017',
                { 
                    user: 'root',
                    pass: 'password',
                    dbName: 'nearbuzz',
                    useNewUrlParser: true, 
                    useUnifiedTopology: true 
                }
            );

        } catch ( error ) {

            throw new Error( 'There was an error in connecting to MongoDB' );

        }

    },

    async uploadS3( file ) {

        try {
            
            AWS.config.setPromisesDependency();
            AWS.config.update( {
                accessKeyId: '',
                secretAccessKey: ''
            } );
            
            const s3 = new AWS.S3();

            file.mv( path.join( __dirname, '../../uploads', file.name ), ( err )=> {

                if ( err ) throw new Error( 'Error Occured in Uploading Files' );

            } );
            // Setting up S3 upload parameters
            const params = {
                ACL: 'public-read',
                Bucket: '',
                Body: fs.createReadStream( path.join( __dirname, '../../uploads', file.name ) ),
                Key: file.name
            };
        
            const data = s3.upload( params ).promise();
            
            if ( !data ) {
                throw new Error( 'Error occured while trying to upload to S3 bucket' );
            }

            fs.unlinkSync( path.join( __dirname, '../../uploads', file.name ) ); // Empty temp folder
            return (await data).Location;

        } catch ( error ) {

            throw error;

        }

    }

};
