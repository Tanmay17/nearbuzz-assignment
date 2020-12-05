const mongoose = require( 'mongoose' );

const vdsSchema = new mongoose.Schema( {

    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },

    mediaType: {
        type: String,
        default: 'VDS',
        required: true
    },

    screenWidth: {
        type: Number,
        required: false
    },

    screenHeight: {
        type: Number,
        required: false
    },

    screenSizeDiagonal: {
        type: Number,
        required: false
    },

    aspectRatio: {
        type: String,
        required: true
    },

    resolutionWidth: {
        type: Number,
        required: false
    },

    resolutionHeight: {
        type: Number,
        required: false
    },

    orientation: {
        type: String,
        default: false,
    },

    siteType: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    locationAddress: {
        type: String,
        default: false,
    },

    premises: {
        type: String,
        default: false,
    },

    premisesType: {
        type: String,
        default: false,
    },

    placement: {
        type: String,
        default: false,
    },

    keywords: {
        type: String,
        default: false,
    },

    photos: {
        type: String,
        default: false,
    },

    spotduration: {
        type: String,
        default: false,
    },

    spotprice: {
        type: String,
        default: false,
    },

    currency: {
        type: String,
        default: false,
    },

    pricingUnit: {
        type: String,
        default: true,
    }

}, { collection: 'vds', timestamps: true } );

module.exports = mongoose.model( 'VDS', vdsSchema );