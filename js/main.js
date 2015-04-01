define(function(require, exports, module) {
    'use strict';

    // Libs
    var $ = require('jquery');
    var _ = require('underscore');


    // Other
    var Module = require('Module/main');


    console.log(Module.prototype);


    var module1 = new Module({
        container: '#test-element',
        color: '#f00'
    });

    module1.say('Hello!');

    var module2 = new Module({
        container: '#test-element',
        color: '#f00',
        text: 'Hello2'
    });














});
