import Vue from 'vue'
import App from './App.vue'
import 'animate.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ('./assets/css/font-awesome.min.css')
import ('./assets/css/templatemo-style.css')
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

//import ('./assets/js/jquery.simple-text-rotator.js')
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true

import VueFullPage from 'vue-fullpage.js'
import ('./assets/js/smoothscroll.js')
import 'jquery.simple-text-rotator'
import {WOW} from 'wowjs'
//require('./assets/js/custom.js')


$(document).ready(function() {
  $('#fullpage').fullpage({
    'verticalCentered': false,
    'scrollingSpeed': 600,
    'autoScrolling': false,
    'css3': true,
    'navigation': true,
    'navigationPosition': 'right',
  });
});

// wow
$(function()
{
new WOW().init();
$(".rotate").textrotator();
})

Vue.config.productionTip = false
Vue.use(VueFullPage);
new Vue({
  render: h => h(App),
}).$mount('#fullpage')
