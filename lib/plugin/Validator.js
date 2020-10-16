const { query, body } = require( 'express-validator' );

exports.validate = ( method ) => {

    switch ( method ) {
        case 'addVDS': {
            return [
                body( 'name' ).isString(),
                body( 'mediaType' ).isString().isIn( [ 'VDS' ] ),
                body( 'screenWidth' ).isInt().optional(),
                body( 'screenHeight' ).isInt().optional(),
                body( 'screenSizeDiagonal' ).isInt().optional(),
                body( 'aspectRatio' ).isIn( [  '16:9', '16:10', '4:3', '2:1', '1:1', 'custom', '1:1', '1:2', '3:4', '10:16', '9:16' ] ).isString(),
                body( 'resolutionWidth' ).isInt().optional(),
                body( 'resolutionHeight' ).isInt().optional(),
                body( 'orientation' ).isString().isIn( [ '+90', '-90', '180', '0' ] ).optional(),
                body( 'siteType' ).isString(),
                body( 'location' ).isString(),
                body( 'locationAddress' ).isString().optional(),
                body( 'premises' ).isString().optional(),
                body( 'premisesType' ).isString().optional(),
                body( 'placement' ).isString().optional(),
                body( 'keywords' ).isString().optional(),
                body( 'photos' ).isString().optional(),
                body( 'spotduration' ).isString().optional(),
                body( 'spotprice' ).isString().optional(),
                body( 'currency' ).isString().optional(),
                body( 'pricingUnit' ).isIn( [ 'CPM', 'impression' ] ).isString()
            ]   
        }
        case 'addContent': {
            return [
                body( 'vdsId' ).isString(),
                body( 'title' ).isString(),
                body( 'duration' ).isString().optional(),
                body( 'contentType' ).isString().isIn( [ 'IMAGE', 'VIDEO' ] ),
                body( 'tags' ).isArray().optional(),
            ]
        }
        case 'getContent': {
            return [
                query( 'vdsId' ).isString()
            ]
        }
    }
}