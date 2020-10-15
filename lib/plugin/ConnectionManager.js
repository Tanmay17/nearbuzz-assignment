const mongoose = require( 'mongoose' );

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

    }

};
