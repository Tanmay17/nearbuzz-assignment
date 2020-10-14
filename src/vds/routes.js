const express = require( 'express' );
const { Validator } = require( '../../lib/plugin' );
const { addVds } = require( './handler' );

const router = express.Router();

// To Add the VDS
// req.files.file
router.post( '/vds', Validator.validate( 'addVDS' ), addVds );

module.exports = router;