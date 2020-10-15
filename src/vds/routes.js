const express = require( 'express' );
const { Validator } = require( '../../lib/plugin' );
const { addVds, listVds } = require( './handler' );

const router = express.Router();

// To Add the VDS
router.post( '/vds', Validator.validate( 'addVDS' ), addVds );

// To List the VDS
router.get( '/vds', listVds );

module.exports = router;