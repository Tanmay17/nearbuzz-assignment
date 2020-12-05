const express = require( 'express' );
const { ConnectionManager } = require( './lib/plugin' );
const fileUpload = require( 'express-fileupload' );
const bodyParser = require( 'body-parser' );

const app = express()
const routes = require( './src/vds/routes' );

try {

    ( async () => {

        console.log( 'Trying to connect to MongoDB' );
        fileData = await ConnectionManager.connectDB();
        console.log( 'Connected to MongoDB' );
    
    } )();

} catch( err ) {

    console.log( err );

}

app.set( 'view engine', 'ejs' );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( fileUpload( {
        createParentPath: true
    } ) 
);

app.use( '/', routes );

app.listen( 3000, () => {

    console.log( 'Server is listening on port 3000' );

} );

module.exports = {
    app
}