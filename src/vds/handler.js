const { validationResult } = require( 'express-validator' );
const { Service: { VDSService } } = require( '../../lib' );
const VdsService = require('../../lib/service/VdsService');

const addVds = async function addVds ( req, res ) {

    const errors = validationResult( req );

    if ( !errors.isEmpty() ) {
        
        return res.status( 400 ).json( { errors: errors.array() } );
        
    }

    try {

        const response = await VdsService.addVDS( req.body );
        
        if( !response ) {

            return res.sendStatus( 422 );

        }
        
        return res.send( { data: {
                id: response[ 0 ][ '_id' ]
            } 
        } ).status( 200 );

    } catch( error ) {

        console.error( 'POST /vds =>', error.message );
        return res.sendStatus( 500 );

    }
}

const listVds = async function listVds ( req, res ) {

    try {

        const response = await VdsService.getVDS();
        
        if( !response ) {

            return res.sendStatus( 422 );

        }
        
        return res.send( { data: response } ).status( 200 );

    } catch( error ) {

        console.error( 'GET /vds =>', error.message );
        return res.sendStatus( 500 );

    }
}

module.exports = {

    addVds,
    listVds

}