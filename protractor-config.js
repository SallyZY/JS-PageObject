
exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'cucumber',

    specs: ['features/*.feature'],

    capabilities:{
        'version': '',
        'platform': 'ANY'
    },

    cucumberOpts: {
    	format: 'pretty',
    	require: ['features/step-definitions/*.js','support/world.js']
    }
};