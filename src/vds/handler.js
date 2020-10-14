const { validationResult } = require( 'express-validator' );

const addVds = async function addVds ( req, res ) {

    const errors = validationResult( req );

    if ( !errors.isEmpty() ) {
        
        return res.status( 400 ).json( { errors: errors.array() } );
        
    }

    try {

        return res.sendStatus( 200 );

    } catch( error ) {

        console.error( 'POST /vds =>', error.message );
        return res.sendStatus( 500 );

    }
}

module.exports = {

    addVds

}