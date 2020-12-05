const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const contentSchema = new Schema( {

    url: {
        type: String,
        required: true
    },

    vdsId: {
        type: Schema.ObjectId,
        ref: 'VDS',
        required: true
    },

    title: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: false
    },

    contentType: {
        type: String,
        required: true
    },

    tags: [{
        type: String,
        required: false
    }]

}, { collection: 'content', timestamps: true } );

module.exports = mongoose.model( 'Content', contentSchema );