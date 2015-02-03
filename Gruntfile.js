
module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        protractor: {
            options: {
                configFile: 'protractor-config.js',
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false // If true, protractor will not use colors in its output.
            },
            chrome: {
                options: {
                    args: {
                        browser: 'chrome'
                    }
                }
            },
            firefox: {
                options: {
                    args: {
                        browser: "firefox"
                    }
                }
            }
        },

        protractor_webdriver: {
            your_target: {
                options: {
                    command: 'java -jar server/selenium-server-standalone-2.44.0.jar'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('test-firefox', ['protractor_webdriver', 'protractor:firefox']);
}