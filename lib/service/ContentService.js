const { ConnectionManager } = require( '../plugin' );
const { Content } = require( '../model' );
const mongoose = require( 'mongoose' );

module.exports = {

    async addContent( file, data ) {

        try {

            const s3Url = await ConnectionManager.uploadS3( file );

            if ( !s3Url ) throw new Error( 'Some Error in upload S3' );

            const contentResponse = await Content.insertMany( [ { ...data, url: s3Url } ] );

            if ( !contentResponse ) throw new Error( 'Some Error Occured in inserting Content Data' );

            return contentResponse;

        } catch ( error ) {

            throw error;

        }

    },

    async getContent( vdsId ) {

        try {
            
            const response = Content.find( {
                vdsId
            } );

            if ( !response ) throw new Error( 'Error in Getting Content' );

            return response;

        } catch ( error ) {
            
            throw error;

        }

    }

}