//console.log('main.js loaded');
$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    paper.view.draw();
    console.log('main.js loaded');
})