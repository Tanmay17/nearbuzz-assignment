const { VDS } = require( '../../lib/model' );

module.exports = {

    async addVDS( data ){

        try {
            
            const response = await VDS.insertMany( [ data ] );

            if( !response ) {
                throw new Error( 'Error while Inserting VDS' );
            }

            return response;

        } catch ( error ) {
            
            throw error;

        }
    },

    async getVDS(){

        try {
            
            const response = await VDS.find();

            if( !response ) {
                throw new Error( 'Error while Getting VDS' );
            }

            return response;

        } catch ( error ) {
            
            throw error;

        }
    }

}