const express = require( 'express' );
const { Validator } = require( '../../lib/plugin' );
const { addVds, listVds, addContent, listContent, renderContent } = require( './handler' );

const router = express.Router();

// To Add the VDS
router.post( '/vds', Validator.validate( 'addVDS' ), addVds );

// To List the VDS
router.get( '/vds', listVds );

// To Insert the Content
router.post( '/content', Validator.validate( 'addContent' ), addContent );

// To List the Content
router.get( '/content', Validator.validate( 'getContent' ), listContent );

// To Render the Page
router.get( '/render/:vdsId', Validator.validate( 'renderContent' ), renderContent );

module.exports = router;